import { BorshCoder, web3 } from '../src'
import { IDL } from './idl'
import 'dotenv/config'

export const PROGRAM_PUBKEY = new web3.PublicKey('4tdmkuY6EStxbS6Y8s5ueznL3VPMSugrvQuDeAHGZhSt')

export const TRANSACTION_SIGNATURES_EXAMPLES = [
  '3rbpAv6ivURuFcnVeVPfSdC3eGNepwsu7cVyZLT9WA3uqhmhsnVpUinMGowAPimkYWXkQ3mP3qo7yTVi1fC2YxJc', //? Whitelist collection
  '5HvaakFQnymtm3223c49nN6PMA5E87pDooFyERgEJWE8WHJrXvPLMvFisGVRer7cQff6Zw54MxvDBLcLX4ewuYB6', //? Borrow staked banx
  '4ojGspsKfVM8UogmZyCvVBCmVSpby8atE15nk4SncteyPKwCj4VHiP7hEimFM6joZEj3EgP6pGkSrPbbfMRLzKiT', //? Repayment call
  '3dZfoHZQWT5bSc4Mc65WT8kzA1XojDZv9NWeTC617TToH6vxm8RoeJ1JqEaFWcmJtCietnMpwRop37bKLEMj4wYG', //? Subscribe banx adventure
  '3FpB8EvCDcdaNbJR7gWpGwUuzF5Y1jLe7ne9pvLP1Xdmna7D37FqdRGk9jN56NhrAxjk1MwhVhLLkeLNWPhh8UCe', //? Refinance
  '3ApeRKCx8p8Fffp18Uyxhqq77NKzKGpmxj19e2LpZy3kai8vb1Mc7SukGxsY2cWKwNvFaKQUkxUi4rWA4ve5ueMC', //? Borrow perpetual
  '44QJrrBWdYq9Wt2oVCeXs8DjCQzdRepbwpdBDmeDFY6h27XP268eSLgix87o4EbjUtVEKiS9PwrsFumGvGxZjHxX', //? Repay perpetual
]

export const coder = new BorshCoder(IDL)

export const RPC_URL = process.env.RPC_URL ?? web3.clusterApiUrl('mainnet-beta')

export const connection = new web3.Connection(RPC_URL)

export const commitment = 'confirmed'

export { IDL } from './idl'
