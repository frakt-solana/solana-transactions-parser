import * as txnParser from '../src'
import { IDL } from './idl'
import { writeJson } from './utils'
import { web3 } from '@project-serum/anchor'
import 'dotenv/config'
import { map } from 'lodash'

const PROGRAM_PUBKEY = new web3.PublicKey('4tdmkuY6EStxbS6Y8s5ueznL3VPMSugrvQuDeAHGZhSt')

const SIGNATURES = [
  '3rbpAv6ivURuFcnVeVPfSdC3eGNepwsu7cVyZLT9WA3uqhmhsnVpUinMGowAPimkYWXkQ3mP3qo7yTVi1fC2YxJc', //? Whitelist collection
  '5HvaakFQnymtm3223c49nN6PMA5E87pDooFyERgEJWE8WHJrXvPLMvFisGVRer7cQff6Zw54MxvDBLcLX4ewuYB6', //? Borrow staked banx
  '4ojGspsKfVM8UogmZyCvVBCmVSpby8atE15nk4SncteyPKwCj4VHiP7hEimFM6joZEj3EgP6pGkSrPbbfMRLzKiT', //? Repayment call
  '3dZfoHZQWT5bSc4Mc65WT8kzA1XojDZv9NWeTC617TToH6vxm8RoeJ1JqEaFWcmJtCietnMpwRop37bKLEMj4wYG', //? Subscribe banx adventure
  '3FpB8EvCDcdaNbJR7gWpGwUuzF5Y1jLe7ne9pvLP1Xdmna7D37FqdRGk9jN56NhrAxjk1MwhVhLLkeLNWPhh8UCe', //? Refinance
  '3ApeRKCx8p8Fffp18Uyxhqq77NKzKGpmxj19e2LpZy3kai8vb1Mc7SukGxsY2cWKwNvFaKQUkxUi4rWA4ve5ueMC', //? Borrow perpetual
]

const TXN_SIGNATURE = SIGNATURES[4]

const coder = new txnParser.BorshCoder(IDL)

const RPC_URL = process.env.RPC_URL ?? web3.clusterApiUrl('mainnet-beta')

const connection = new web3.Connection(RPC_URL)

const commitment = 'confirmed'

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

    writeJson({
      input: transaction,
      fileName: 'examples/output/parsedTransaction.json',
    })

    const accounts = txnParser.getProgramAccountsFromParsedTransaction({
      programId: PROGRAM_PUBKEY,
      idl: IDL,
      coder,
      transaction,
    })

    const { accountsData, deletedAccounts } = await txnParser.getAccountsData({
      accounts,
      coder,
      commitment,
      connection,
      idl: IDL,
      programId: PROGRAM_PUBKEY,
    })

    const convertedAccounts = map(accountsData, ({ name, publicKey, data }) => {
      const convertedData = txnParser.convertValuesInAccount(data, {
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
        deletedAccounts: map(deletedAccounts, (a) => a.toBase58()),
      },
      fileName: 'examples/output/parsedResult.json',
    })
  } catch (error) {
    // eslint-disable-next-line no-undef
    console.error(error)
  }
}

parsedTransactionExample()

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

    writeJson({
      input: transaction,
      fileName: 'examples/output/rawTransaction.json',
    })

    const accounts = txnParser.getProgramAccountsFromMessage({
      programId: PROGRAM_PUBKEY,
      idl: IDL,
      coder,
      message: transaction.message,
    })

    const data = await txnParser.getAccountsData({
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
