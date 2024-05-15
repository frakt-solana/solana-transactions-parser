import { capitalizeFirstLetter } from './utils'
import { ACCOUNT_DISCRIMINATOR_SIZE, BorshCoder, Idl, web3 } from '@project-serum/anchor'
import { sha256 } from 'js-sha256'
import { chain } from 'lodash'

export type AccountNameAndDiscriminator = { name: string; discriminator: Buffer }
export function createAccountDiscriminators(idl: Idl): Array<AccountNameAndDiscriminator> {
  return chain(idl.accounts)
    .map(({ name }) => {
      const discriminator = Buffer.from(
        //? Hashes in anchor accounts are created using names with capitalized first letter
        sha256.digest(`account:${capitalizeFirstLetter(name)}`),
        //? First 8 bytes store name hash
      ).subarray(0, ACCOUNT_DISCRIMINATOR_SIZE)
      return { name, discriminator }
    })
    .value()
}

/**
 * Returns account name (string) if it's possible to determine account type
 * Returns null if account name not found.
 * Name always starts with lowercase letter! Which can be different from real account name
 */
export function getAccountName(
  accountDiscriminators: AccountNameAndDiscriminator[],
  accountInfo: Buffer,
): string | null {
  const targetDiscriminator = accountInfo.subarray(0, 8)

  const name = accountDiscriminators.find(({ discriminator }) =>
    targetDiscriminator.equals(discriminator),
  )?.name

  return name ?? null
}

export function decodeAccountDataSafe<AccountDataType>(
  coder: BorshCoder,
  accountName: string,
  data: Buffer,
): AccountDataType | null {
  try {
    return coder.accounts.decode(accountName, data)
  } catch (error) {
    console.error(error)
    return null
  }
}

type AccountData = {
  name: string
  publicKey: web3.PublicKey
  data: unknown
}

type PublicKeyAndInfo = [web3.PublicKey, web3.AccountInfo<Buffer> | null]

type GetAccountsDataParams = {
  connection: web3.Connection
  commitment: web3.Commitment
  accounts: web3.PublicKey[]
  programId: web3.PublicKey
  coder: BorshCoder
  idl: Idl
}
export async function getAccountsData({
  connection,
  commitment,
  programId,
  coder,
  idl,
  accounts,
}: GetAccountsDataParams): Promise<AccountData[]> {
  const ACCOUNTS_NAMES_AND_DISCRIMINATORS = createAccountDiscriminators(idl)

  const accountsInfo = await connection.getMultipleAccountsInfo(accounts, {
    commitment,
  })

  const publicKeysAndInfo: PublicKeyAndInfo[] = accounts.map((acc, idx) => [acc, accountsInfo[idx]])

  return (
    chain(publicKeysAndInfo)
      //? fitler empty(deleted) accounts and accounts owned by other programs
      .filter(([, info]) => !!info && info.owner.equals(programId))
      .map(([publicKey, accountInfo]): AccountData => {
        //? accountInfo always exists because null values were filtered
        const { data } = accountInfo as web3.AccountInfo<Buffer>

        const accountName = getAccountName(ACCOUNTS_NAMES_AND_DISCRIMINATORS, data) ?? ''

        const parsedData = decodeAccountDataSafe(coder, accountName, data)

        return {
          //? Capitalization is needed because getAccountName returns name that starts from lowercase letter
          name: capitalizeFirstLetter(accountName),
          publicKey,
          data: parsedData,
        }
      })
      .value()
  )
}
