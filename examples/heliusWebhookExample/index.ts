import {
  HeliusEnhancedTransaction,
  convertValuesInAccount,
  getAccountsData,
  getProgramAccountsFromHeliusEnhancedTransaction,
  waitForTransactionConfirmation,
  web3,
} from '../../src'
import { IDL, PROGRAM_PUBKEY, coder, connection } from '../constants'
import { writeJson } from '../utils'
import bodyParser from 'body-parser'
import express from 'express'
import { map } from 'lodash'

const commitment: web3.Commitment = 'finalized'

const app = express()
const port = process.env.PORT || 8080

app.use(bodyParser.json())

app.post('/webhook', async (req, res) => {
  //? If you don't respond, Helius will try to resend the request
  res.status(200).send('Webhook received')

  const payload: HeliusEnhancedTransaction[] = req.body

  await Promise.allSettled(map(payload, processTransaction))
})

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Webhook server listening at http://localhost:${port}`)
})

async function processTransaction(
  heliusEnhancedTransaction: HeliusEnhancedTransaction,
): Promise<void> {
  // eslint-disable-next-line no-console
  console.log(`Received transaction ${heliusEnhancedTransaction.signature}`)

  await waitForTransactionConfirmation({
    connection,
    commitment,
    refetchInterval: 5, //? every 5 seconds
    timeout: 30, //? Abort polling in 30 seconds,
    signature: heliusEnhancedTransaction.signature,
  })

  const accounts = getProgramAccountsFromHeliusEnhancedTransaction({
    programId: PROGRAM_PUBKEY,
    idl: IDL,
    coder,
    transaction: heliusEnhancedTransaction,
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
    const convertedData = convertAccountData(data)

    return {
      name,
      publicKey: publicKey.toBase58(),
      data: convertedData,
    }
  })

  writeJson({
    input: {
      type: heliusEnhancedTransaction.type,
      wallet: heliusEnhancedTransaction.feePayer,
      signature: heliusEnhancedTransaction.signature,
      accounts: convertedAccounts,
      emptyAccounts: map(emptyAccounts, (a) => a.toBase58()),
    },
    //? You need to create logs folder yourself
    fileName: `examples/heliusWebhookExample/logs/${Date.now()}_${heliusEnhancedTransaction.type}_${heliusEnhancedTransaction.feePayer}_${heliusEnhancedTransaction.signature}.json`,
  })

  // eslint-disable-next-line no-console
  console.log(`Transaction ${heliusEnhancedTransaction.signature} is processed`)
}

function convertAccountData(data: unknown) {
  return convertValuesInAccount(data, {
    bnParser: (v) => {
      try {
        return v.toNumber()
      } catch (err) {
        return 0
      }
    },
    pubkeyParser: (v) => v.toBase58(),
  })
}
