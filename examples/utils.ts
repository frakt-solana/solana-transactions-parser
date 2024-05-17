import { web3 } from '../src'
import { promises as fs } from 'fs'

type WriteJsonParams = { input: unknown; fileName?: string }
export async function writeJson({
  input,
  fileName = 'output.json',
}: WriteJsonParams): Promise<void> {
  return void (await fs.writeFile(fileName, JSON.stringify(input, null, 2)))
}

export async function readJson(path: string): Promise<string> {
  return await fs.readFile(path, { encoding: 'utf-8' })
}

export async function wait(time: number) {
  return await new Promise((resolve) => setTimeout(resolve, time))
}

type ConfirmTransactionByPollingSignatureStatusParams = {
  signature: string
  connection: web3.Connection
  commitment: web3.Commitment
  /**
   * Required because it is the only way to stop the loop if there were no errors
   */
  abortController: AbortController
  /**
   * Polling interval in seconds
   */
  refetchInterval: number
}
/**
 * Can be used as fallback when websocket died (in connection.confirmTransaction) or RPC doen't support websockets at all
 * Throws ConfirmTransactionError if something goes wrong
 */
export async function confirmTransactionByPollingSignatureStatus({
  signature,
  connection,
  abortController,
  commitment,
  refetchInterval,
}: ConfirmTransactionByPollingSignatureStatusParams): Promise<string | undefined> {
  try {
    while (!abortController.signal.aborted) {
      const { value: signatureValue } = await connection.getSignatureStatus(signature, {
        searchTransactionHistory: false,
      })
      if (signatureValue?.confirmationStatus === commitment) {
        abortController.abort()
        return signature
      }
      await wait(refetchInterval * 1000)
    }
  } catch (error) {
    throw new Error('Error fetching transaction signature')
  }
}

export async function abortOnTimeout(abortController: AbortController, timeout: number) {
  await wait(timeout * 1000)
  if (!abortController.signal.aborted) {
    abortController.abort()
  }
}
