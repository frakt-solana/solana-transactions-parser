import { capitalizeFirstLetter } from '../utils'
import { BN, BorshCoder, DISCRIMINATOR_SIZE, Idl, web3 } from '@coral-xyz/anchor'
import { sha256 } from 'js-sha256'
import _ from 'lodash'

export type AccountNameAndDiscriminator = { name: string; discriminator: Buffer }
export function createAccountDiscriminators(idl: Idl): Array<AccountNameAndDiscriminator> {
  return _.chain(idl.accounts)
    .map(({ name }) => {
      const discriminator = Buffer.from(
        //? Hashes in anchor accounts are created using names with capitalized first letter
        sha256.digest(`account:${capitalizeFirstLetter(name)}`),
        //? First 8 bytes store name hash
      ).subarray(0, DISCRIMINATOR_SIZE)
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
    //? Typescript mistake
    targetDiscriminator.equals(discriminator as unknown as Uint8Array),
  )?.name

  return name ?? null
}

export function decodeAccountDataSafe<AccountDataType>(
  coder: BorshCoder,
  accountName: string,
  data: Buffer,
): AccountDataType | null {
  try {
    const decodedData = coder.accounts.decode(accountName, data)
    return parseEnumsInAccount(decodedData)
  } catch (error) {
    console.error(error)
    return null
  }
}

export type AccountData = {
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
}: GetAccountsDataParams): Promise<{
  accountsData: AccountData[]
  emptyAccounts: web3.PublicKey[]
}> {
  const ACCOUNTS_NAMES_AND_DISCRIMINATORS = createAccountDiscriminators(idl)

  const accountsInfo = await connection.getMultipleAccountsInfo(accounts, {
    commitment,
  })

  const publicKeysAndInfo: PublicKeyAndInfo[] = accounts.map((acc, idx) => [acc, accountsInfo[idx]])

  //? Assume the account is empty if it has no data
  //? Warn that accounts may not be owned by provided program!
  const emptyAccounts = _.chain(publicKeysAndInfo)
    //? Additional check for lamports amount. If 0 -- account is empty
    .filter(([, info]) => _.isNil(info) || info?.lamports === 0)
    .map(([publicKey]) => publicKey)
    .value()

  const accountsData = _.chain(publicKeysAndInfo)
    //? fitler empty(deleted) accounts and accounts owned by other programs
    .filter(([, info]) => !!info && info.owner.equals(programId))
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

  return {
    accountsData,
    emptyAccounts,
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function parseEnumsInAccount<AccountDataType>(rawAccount: any): AccountDataType {
  const rawAccountCopy = _.cloneDeep(rawAccount)

  for (const key in rawAccountCopy) {
    const value = rawAccountCopy[key]

    if (_.isNil(value)) continue

    //? if value is BN --> skip
    if (BN.isBN(value)) continue

    //? If value is pubkey --> skip
    if (value?.toBase58) continue

    //? If not an object --> skip
    if (!_.isObjectLike(value)) continue

    if (Object.keys(value).length === 1 && _.isEmpty(Object.values(value)[0])) {
      //? Replace empty objects with strings (enums parsing)
      rawAccountCopy[key] = Object.keys(value)[0]
      continue
    }

    rawAccountCopy[key] = parseEnumsInAccount(value)
  }

  return rawAccountCopy
}

type ConvertValuesInAccountOptions = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  bnParser?: (value: BN) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pubkeyParser?: (value: web3.PublicKey) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  stringParser?: (value: string) => any
}
/**
 *
 * @param account Object that represents an account
 * @param options optional param with functions that parse BN, Pubkey or string
 * @returns Parsed account
 */
export function convertValuesInAccount<AccountType>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  account: any,
  options?: ConvertValuesInAccountOptions,
): AccountType {
  const accountCopy = _.cloneDeep(account)

  for (const key in accountCopy) {
    const value = accountCopy[key]

    if (_.isNil(value)) continue

    if (BN.isBN(value)) {
      if (options?.bnParser) {
        accountCopy[key] = options.bnParser(value)
      }
      continue
    }

    if (isPublicKey(value)) {
      if (options?.pubkeyParser) {
        accountCopy[key] = options.pubkeyParser(value)
      }
      continue
    }

    if (typeof value === 'string') {
      if (options?.stringParser) {
        accountCopy[key] = options.stringParser(value)
      }
      continue
    }

    if (!_.isObjectLike(value)) {
      //? If smth else (not an object, BN, Pubkey, string) --> skip
      continue
    }

    accountCopy[key] = convertValuesInAccount(value, options)
  }

  return accountCopy
}

//? duck typing
export function isPublicKey(value: unknown): boolean {
  const hasToBase58 = typeof (value as web3.PublicKey)?.toBase58 === 'function'
  const hasToBytes = typeof (value as web3.PublicKey)?.toBytes === 'function'

  return hasToBase58 && hasToBytes
}
