import { HeliusEnhancedInstruction, HeliusEnhancedTransaction } from '../types'
import { abortOnTimeout, wait } from '../utils'
import { BorshCoder, Idl, web3 } from '@coral-xyz/anchor'
import bs58 from 'bs58'
import _ from 'lodash'

export function getProgramInstructionsFromParsedTransaction(
  programId: web3.PublicKey,
  transaction: web3.ParsedTransaction,
): web3.PartiallyDecodedInstruction[] {
  return (
    _.chain(transaction.message.instructions)
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

  return _.chain(message.compiledInstructions)
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

  return _.chain(programInstructions)
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

  return _.chain(programInstructions)
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

//? Helius specific functions

type GetProgramAccountsFromHeliusEnhancedTransaction = {
  programId: web3.PublicKey
  idl: Idl
  coder: BorshCoder
  transaction: HeliusEnhancedTransaction
}
export function getProgramAccountsFromHeliusEnhancedTransaction({
  programId,
  idl,
  coder,
  transaction,
}: GetProgramAccountsFromHeliusEnhancedTransaction) {
  //? Get instructions that relate only to provided program
  const programInstructions = getProgramInstructionsFromHeliusEnhancedTransaction(
    programId,
    transaction,
  )

  return _.chain(programInstructions)
    .map(getHeliusEnchancedInstructionAccountsSafe.bind(null, idl, coder))
    .compact()
    .flatten()
    .uniqWith((a, b) => a.equals(b))
    .value()
}

export function getProgramInstructionsFromHeliusEnhancedTransaction(
  programId: web3.PublicKey,
  transaction: HeliusEnhancedTransaction,
): HeliusEnhancedInstruction[] {
  return _.chain(transaction.instructions)
    .filter((ixn) => new web3.PublicKey(ixn.programId).equals(programId))
    .value()
}

export function getHeliusEnchancedInstructionAccountsSafe(
  idl: Idl,
  coder: BorshCoder,
  instruction: HeliusEnhancedInstruction,
): web3.PublicKey[] | null {
  try {
    const { data, accounts } = instruction

    const decoded = coder.instruction.decode(data, 'base58')
    if (!decoded) throw new Error('Failed to decode instruction data')

    const { name: ixnName } = decoded

    const idlIxn = idl.instructions?.find(({ name }) => name === ixnName)
    if (!idlIxn) throw new Error("Provided IDL doesn't contain this instruction")

    return _.map(accounts, (key) => new web3.PublicKey(key))
  } catch (error) {
    console.error(error)
    return null
  }
}

type ConfirmTransactionByPollingSignatureStatusParams = {
  signature: string
  connection: web3.Connection
  commitment: web3.Commitment
  /**
   * Required because it is the only way to stop the loop if there were no errors
   */
  abortController: AbortController
  /**
   * Polling interval in seconds
   */
  refetchInterval: number
}
/**
 * Can be used as fallback when websocket died (in connection.confirmTransaction) or RPC doen't support websockets at all
 * Throws ConfirmTransactionError if something goes wrong
 */
export async function confirmTransactionByPollingSignatureStatus({
  signature,
  connection,
  abortController,
  commitment,
  refetchInterval,
}: ConfirmTransactionByPollingSignatureStatusParams): Promise<string | undefined> {
  try {
    while (!abortController.signal.aborted) {
      const { value: signatureValue } = await connection.getSignatureStatus(signature, {
        searchTransactionHistory: false,
      })
      if (signatureValue?.confirmationStatus === commitment) {
        abortController.abort()
        return signature
      }
      await wait(refetchInterval * 1000)
    }
  } catch (error) {
    throw new Error('Error fetching transaction signature')
  }
}

type WaitForTransactionConfirmationParams = {
  connection: web3.Connection
  refetchInterval: number
  timeout: number
  commitment: web3.Commitment
  signature: string
}
export async function waitForTransactionConfirmation({
  connection,
  signature,
  refetchInterval,
  timeout,
  commitment,
}: WaitForTransactionConfirmationParams): Promise<void> {
  const fetchStatusAbortController = new AbortController()

  const confirmTransactionPromise = confirmTransactionByPollingSignatureStatus({
    connection,
    refetchInterval,
    commitment,
    signature,
    abortController: fetchStatusAbortController,
  })

  try {
    await Promise.race([
      confirmTransactionPromise,
      abortOnTimeout(fetchStatusAbortController, timeout),
    ])
  } catch (error) {
    console.error(error)
  } finally {
    fetchStatusAbortController.abort()
  }
}
