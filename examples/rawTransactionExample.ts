import { getAccountsData, getProgramAccountsFromMessage } from '../src'
import {
  IDL,
  PROGRAM_PUBKEY,
  TRANSACTION_SIGNATURES_EXAMPLES,
  coder,
  commitment,
  connection,
} from './constants'
import { writeJson } from './utils'

const TXN_SIGNATURE = TRANSACTION_SIGNATURES_EXAMPLES[6]

//! Not finished. Doesn't work with transactions with lookupTables
export async function rawTransactionExample() {
  try {
    const response = await connection.getTransaction(TXN_SIGNATURE, {
      commitment,
      maxSupportedTransactionVersion: 2,
    })

    if (!response) {
      throw new Error('Error fetching txn')
    }

    const { transaction } = response

    const accounts = getProgramAccountsFromMessage({
      programId: PROGRAM_PUBKEY,
      idl: IDL,
      coder,
      message: transaction.message,
    })

    const data = await getAccountsData({
      accounts,
      coder,
      commitment,
      connection,
      idl: IDL,
      programId: PROGRAM_PUBKEY,
    })

    writeJson({
      input: data,
      fileName: 'examples/output/rawResult.json',
    })
  } catch (error) {
    // eslint-disable-next-line no-undef
    console.error(error)
  }
}
