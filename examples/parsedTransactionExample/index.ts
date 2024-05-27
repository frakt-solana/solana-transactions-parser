import {
  convertValuesInAccount,
  getAccountsData,
  getProgramAccountsFromParsedTransaction,
} from '../../src'
import { IDL, PROGRAM_PUBKEY, coder, commitment, connection } from '../constants'
import { writeJson } from '../utils'
import { map } from 'lodash'

const TXN_SIGNATURE =
  '3ApeRKCx8p8Fffp18Uyxhqq77NKzKGpmxj19e2LpZy3kai8vb1Mc7SukGxsY2cWKwNvFaKQUkxUi4rWA4ve5ueMC'

;(async () => {
  try {
    const response = await connection.getParsedTransaction(TXN_SIGNATURE, {
      commitment: 'finalized',
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

    connection.onProgramAccountChange

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
      fileName: 'examples/parsedTransactionExample/output/result.json',
    })
  } catch (error) {
    // eslint-disable-next-line no-undef
    console.error(error)
  }
})()
