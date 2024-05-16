import * as txnParser from '../src'
import { IDL } from './idl'
import { writeJson } from './utils'
import { BorshCoder, web3 } from '@project-serum/anchor'
import 'dotenv/config'
import { map } from 'lodash'

const PROGRAM_PUBKEY = new web3.PublicKey('4tdmkuY6EStxbS6Y8s5ueznL3VPMSugrvQuDeAHGZhSt')

const SIGNATURES = [
  '3rbpAv6ivURuFcnVeVPfSdC3eGNepwsu7cVyZLT9WA3uqhmhsnVpUinMGowAPimkYWXkQ3mP3qo7yTVi1fC2YxJc', //? Whitelist collection
  '5HvaakFQnymtm3223c49nN6PMA5E87pDooFyERgEJWE8WHJrXvPLMvFisGVRer7cQff6Zw54MxvDBLcLX4ewuYB6', //? Borrow staked banx
]

const TXN_SIGNATURE = SIGNATURES[1]

const coder = new BorshCoder(IDL)

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

    const data = await txnParser.getAccountsData({
      accounts,
      coder,
      commitment,
      connection,
      idl: IDL,
      programId: PROGRAM_PUBKEY,
    })

    const convertedAccounts = map(data, ({ name, publicKey, data }) => {
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
      input: convertedAccounts,
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
