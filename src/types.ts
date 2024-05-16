//? Module to support helius webhooks

export type HeliusEnhancedAccountData = {
  account: string
  nativeBalanceChange: number
  tokenBalanceChanges: unknown[] //? This value is unused in module. No need to describe
}

type HeliusBaseEnhancedInstruction = {
  accounts: string[]
  data: string
  programId: string
}

export type HeliusEnhancedInstruction = HeliusBaseEnhancedInstruction & {
  innerInstructions?: HeliusBaseEnhancedInstruction[]
}

export type HeliusEnhancedTransaction = {
  signature: string
  fee: number
  feePayer: string
  slot: number
  source: string
  type: string
  timestamp: number
  accountData: HeliusEnhancedAccountData[]
  instructions: HeliusEnhancedInstruction[]
  transactionError: unknown //? This value is unused in module. No need to describe
  tokenTransfers: unknown[] //? This value is unused in module. No need to describe
}
