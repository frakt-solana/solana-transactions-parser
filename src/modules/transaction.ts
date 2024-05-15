import { BorshCoder, Idl, web3 } from '@project-serum/anchor'
import bs58 from 'bs58'
import { chain } from 'lodash'

export function getProgramInstructionsFromParsedTransaction(
  programId: web3.PublicKey,
  transaction: web3.ParsedTransaction,
): web3.PartiallyDecodedInstruction[] {
  return (
    chain(transaction.message.instructions)
      //? Use only partiallyDecodedInstruction with a certain programId
      .filter(
        (ixn) =>
          !!(ixn as web3.PartiallyDecodedInstruction)?.data && ixn.programId.equals(programId),
      )
      .value() as web3.PartiallyDecodedInstruction[]
  )
}

//! Not finished. Doesn't work with transactions with lookupTables
export function getProgramInstructionsFromMessage(
  programId: web3.PublicKey,
  message: web3.VersionedMessage,
): web3.MessageCompiledInstruction[] {
  const accountKeysArray = message.staticAccountKeys

  return chain(message.compiledInstructions)
    .filter((ixn) => accountKeysArray[ixn.programIdIndex].equals(programId))
    .value()
}

export function getInstructionAccountsSafe(
  idl: Idl,
  coder: BorshCoder,
  instruction: web3.PartiallyDecodedInstruction,
): web3.PublicKey[] | null {
  try {
    const { data, accounts } = instruction

    const decoded = coder.instruction.decode(data, 'base58')
    if (!decoded) throw new Error('Failed to decode instruction data')

    const { name: ixnName } = decoded

    const idlIxn = idl.instructions?.find(({ name }) => name === ixnName)
    if (!idlIxn) throw new Error("Provided IDL doesn't contain this instruction")

    return accounts
  } catch (error) {
    console.error(error)
    return null
  }
}

type GetProgramAccountsFromParsedTransactionProps = {
  programId: web3.PublicKey
  idl: Idl
  coder: BorshCoder
  transaction: web3.ParsedTransaction
}
export function getProgramAccountsFromParsedTransaction({
  programId,
  idl,
  coder,
  transaction,
}: GetProgramAccountsFromParsedTransactionProps): web3.PublicKey[] {
  //? Get instructions that relate only to provided program
  const programInstructions = getProgramInstructionsFromParsedTransaction(programId, transaction)

  return chain(programInstructions)
    .map(getInstructionAccountsSafe.bind(null, idl, coder))
    .compact()
    .flatten()
    .uniqWith((a, b) => a.equals(b))
    .value()
}

type GetProgramAccountsFromMessageProps = {
  programId: web3.PublicKey
  idl: Idl
  coder: BorshCoder
  message: web3.VersionedMessage
}
//! Not finished. Doesn't work with transactions with lookupTables
export function getProgramAccountsFromMessage({
  programId,
  idl,
  coder,
  message,
}: GetProgramAccountsFromMessageProps): web3.PublicKey[] {
  //? Get instructions that relate only to provided program
  const programInstructions = getProgramInstructionsFromMessage(programId, message)

  const staticAccountKeys = message.staticAccountKeys

  return chain(programInstructions)
    .map((ixn) => {
      const decodedIxn = createPartiallyDecodedInstruction(staticAccountKeys, ixn)
      return getInstructionAccountsSafe(idl, coder, decodedIxn)
    })
    .compact()
    .flatten()
    .uniqWith((a, b) => a.equals(b))
    .value()
}

//! Not finished. Doesn't work with transactions with lookupTables
function createPartiallyDecodedInstruction(
  staticAccountKeys: web3.PublicKey[],
  instruction: web3.MessageCompiledInstruction,
): web3.PartiallyDecodedInstruction {
  const { accountKeyIndexes, programIdIndex, data } = instruction

  return {
    accounts: accountKeyIndexes.map((idx) => staticAccountKeys[idx]),
    programId: staticAccountKeys[programIdIndex],
    data: bs58.encode(data),
  }
}
