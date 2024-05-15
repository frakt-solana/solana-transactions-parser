import { promises as fs } from 'fs'

type WriteJson = (params: { input: unknown; fileName?: string }) => Promise<void>

export const writeJson: WriteJson = async ({ input, fileName = 'output.json' }) => {
  return void (await fs.writeFile(fileName, JSON.stringify(input, null, 2)))
}
