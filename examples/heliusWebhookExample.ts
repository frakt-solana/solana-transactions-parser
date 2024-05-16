import {
  HeliusEnhancedTransaction,
  convertValuesInAccount,
  getAccountsData,
  getProgramAccountsFromHeliusEnhancedTransaction,
} from '../src'
import { IDL, PROGRAM_PUBKEY, coder, commitment, connection } from './constants'
import { readJson, writeJson } from './utils'
import { map } from 'lodash'

export async function heliusWebhookExample() {
  try {
    const payloadJson = await readJson('examples/input/heliusInput2.json')
    const transaction = JSON.parse(payloadJson) as HeliusEnhancedTransaction

    const accounts = getProgramAccountsFromHeliusEnhancedTransaction({
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
        emptyAccounts: map(emptyAccounts, (a) => a.toBase58()),
      },
      fileName: 'examples/output/heliusResult.json',
    })
  } catch (error) {
    // eslint-disable-next-line no-undef
    console.error(error)
  }
}
