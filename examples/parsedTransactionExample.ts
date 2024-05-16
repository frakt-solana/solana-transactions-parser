import {
  convertValuesInAccount,
  getAccountsData,
  getProgramAccountsFromParsedTransaction,
} from '../src'
import {
  IDL,
  PROGRAM_PUBKEY,
  TRANSACTION_SIGNATURES_EXAMPLES,
  coder,
  commitment,
  connection,
} from './constants'
import { writeJson } from './utils'
import { map } from 'lodash'

const TXN_SIGNATURE = TRANSACTION_SIGNATURES_EXAMPLES[6]

export async function parsedTransactionExample() {
  try {
    const response = await connection.getParsedTransaction(TXN_SIGNATURE, {
      commitment,
      maxSupportedTransactionVersion: 2,
    })

    if (!response) {
      throw new Error('Error fetching txn')
    }

    const { transaction } = response

    const accounts = getProgramAccountsFromParsedTransaction({
      programId: PROGRAM_PUBKEY,
      idl: IDL,
      coder,
      transaction,
    })

    const { accountsData, emptyAccounts } = await getAccountsData({
      accounts,
      coder,
      commitment,
      connection,
      idl: IDL,
      programId: PROGRAM_PUBKEY,
    })

    const convertedAccounts = map(accountsData, ({ name, publicKey, data }) => {
      const convertedData = convertValuesInAccount(data, {
        bnParser: (v) => {
          try {
            return v.toNumber()
          } catch (err) {
            return 0
          }
        },
        pubkeyParser: (v) => v.toBase58(),
      })

      return {
        name,
        publicKey: publicKey.toBase58(),
        data: convertedData,
      }
    })

    writeJson({
      input: {
        accounts: convertedAccounts,
        deletedAccounts: map(emptyAccounts, (a) => a.toBase58()),
      },
      fileName: 'examples/output/parsedResult.json',
    })
  } catch (error) {
    // eslint-disable-next-line no-undef
    console.error(error)
  }
}
