import { heliusWebhookExample } from './heliusWebhookExample'
import { parsedTransactionExample } from './parsedTransactionExample'
import { rawTransactionExample } from './rawTransactionExample'

const examples = {
  parsedTransactionExample,
  heliusWebhookExample,
  rawTransactionExample,
}

;(async () => {
  await examples.parsedTransactionExample()
  await examples.heliusWebhookExample()
})()
