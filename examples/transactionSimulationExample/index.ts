import {
  AccountData,
  convertValuesInAccount,
  createAccountDiscriminators,
  decodeAccountDataSafe,
  getAccountName,
  parseEnumsInAccount,
  web3,
} from '../../src'
import { capitalizeFirstLetter } from '../../src/utils'
import { IDL, PROGRAM_PUBKEY, coder, commitment, connection } from '../constants'
import { writeJson } from '../utils'
import { BN } from '@coral-xyz/anchor'
import { stakeBanxToken } from 'fbonds-core/lib/fbond-protocol/functions/banxStaking/banxTokenStaking'
import { chain, isNil, map } from 'lodash'

export async function transactionSimulationExample() {
  try {
    const walletPubkey = new web3.PublicKey('6mUV71XNAJYvhmaZUiNjEgejBkGvvPNmGV7Rr3qPyXDo')
    const tokenMint = new web3.PublicKey('BANXbTpN8U2cU41FjPxe2Ti37PiT5cCxLUKDQZuJeMMR')

    const { instructions } = await stakeBanxToken({
      connection,
      programId: PROGRAM_PUBKEY,
      accounts: {
        userPubkey: walletPubkey,
        tokenMint,
      },
      args: {
        tokensToStake: new BN(1 * 1e9),
      },
      sendTxn: async (): Promise<void> => await Promise.resolve(),
    })

    const SIMULATION_CU_LIMIT = 1_400_000

    const simulationInstructions = [
      web3.ComputeBudgetProgram.setComputeUnitLimit({ units: SIMULATION_CU_LIMIT }),
      ...instructions,
    ]

    const transaction = new web3.VersionedTransaction(
      new web3.TransactionMessage({
        instructions: simulationInstructions,
        payerKey: walletPubkey,
        recentBlockhash: web3.PublicKey.default.toString(),
      }).compileToV0Message(),
    )

    const accounts = transaction.message.staticAccountKeys

    const { value: simulationValue } = await connection.simulateTransaction(transaction, {
      replaceRecentBlockhash: true,
      sigVerify: false,
      accounts: {
        encoding: 'base64',
        addresses: accounts.map((k) => k.toBase58()),
      },
      commitment,
    })

    writeJson({
      input: simulationValue,
      fileName: 'examples/transactionSimulationExample/output/simulation.json',
    })

    const ACCOUNTS_NAMES_AND_DISCRIMINATORS = createAccountDiscriminators(IDL)

    if (!simulationValue.accounts || !simulationValue.accounts.length) {
      throw new Error('Failed to fetch simulation accounts')
    }

    const accountsInfo = chain(simulationValue.accounts)
      .compact()
      .map((account) => {
        const { data, executable, owner, lamports, rentEpoch } = account

        return {
          executable,
          owner: new web3.PublicKey(owner),
          lamports,
          data: Buffer.from(data[0], 'base64'),
          rentEpoch,
        } as web3.AccountInfo<Buffer>
      })
      .value()

    type PublicKeyAndInfo = [web3.PublicKey, web3.AccountInfo<Buffer> | null]
    const publicKeysAndInfo: PublicKeyAndInfo[] = accounts.map((acc, idx) => [
      acc,
      accountsInfo[idx],
    ])

    //? Assume the account is empty if it has no data
    //? Warn that accounts may not be owned by provided program!
    const emptyAccounts = chain(publicKeysAndInfo)
      .filter(([, info]) => isNil(info))
      .map(([publicKey]) => publicKey)
      .value()

    const accountsData = chain(publicKeysAndInfo)
      //? fitler empty(deleted) accounts and accounts owned by other programs
      .filter(([, info]) => !!info && info.owner.equals(PROGRAM_PUBKEY))
      .map(([publicKey, accountInfo]): AccountData => {
        //? accountInfo always exists because null values were filtered
        const { data } = accountInfo as web3.AccountInfo<Buffer>

        const accountName = getAccountName(ACCOUNTS_NAMES_AND_DISCRIMINATORS, data) ?? ''

        const parsedData = decodeAccountDataSafe<unknown>(coder, accountName, data)

        return {
          //? Capitalization is needed because getAccountName returns name that starts from lowercase letter
          name: capitalizeFirstLetter(accountName),
          publicKey,
          data: parsedData ? parseEnumsInAccount(parsedData) : null,
        }
      })
      .value()

    const convertedAccounts = map(accountsData, ({ name, publicKey, data }) => {
      const convertedData = convertValuesInAccount(data, {
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
        emptyAccounts: map(emptyAccounts, (a) => a.toBase58()),
      },
      fileName: 'examples/transactionSimulationExample/output/result.json',
    })
  } catch (error) {
    console.error(error)
  }
}
