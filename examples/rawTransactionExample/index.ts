import { getAccountsData, getProgramAccountsFromMessage } from '../../src'
import { IDL, PROGRAM_PUBKEY, coder, commitment, connection } from '../constants'
import { writeJson } from '../utils'

const TXN_SIGNATURE =
  '3rbpAv6ivURuFcnVeVPfSdC3eGNepwsu7cVyZLT9WA3uqhmhsnVpUinMGowAPimkYWXkQ3mP3qo7yTVi1fC2YxJc'

//! Not finished. Doesn't work with transactions with lookupTables
;(async () => {
  try {
    const response = await connection.getTransaction(TXN_SIGNATURE, {
      commitment: 'finalized',
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
      fileName: 'examples/rawTransactionExample/output/result.json',
    })
  } catch (error) {
    // eslint-disable-next-line no-undef
    console.error(error)
  }
})()
