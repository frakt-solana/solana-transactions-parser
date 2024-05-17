import { parsedTransactionExample } from './parsedTransactionExample'
import { rawTransactionExample } from './rawTransactionExample'
import { transactionSimulationExample } from './transactionSimulationExample'

const examples = {
  transactionSimulationExample,
  parsedTransactionExample,
  rawTransactionExample,
}

;(async () => {
  // await examples.transactionSimulationExample()
  await examples.parsedTransactionExample()
  // await examples.heliusWebhookExample()
  //! Not finished. Doesn't work with transactions with lookupTables
  // await examples.rawTransactionExample()
})()
