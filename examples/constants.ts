import { BorshCoder, web3 } from '../src'
import jsonIdl from './idl.json'
import { Idl } from '@coral-xyz/anchor'
import 'dotenv/config'

export const IDL = jsonIdl as Idl

export const PROGRAM_PUBKEY = new web3.PublicKey('4tdmkuY6EStxbS6Y8s5ueznL3VPMSugrvQuDeAHGZhSt')

export const coder = new BorshCoder(IDL)

export const RPC_URL = process.env.RPC_URL ?? web3.clusterApiUrl('mainnet-beta')

export const connection = new web3.Connection(RPC_URL)

export const commitment: web3.Commitment = 'finalized'
