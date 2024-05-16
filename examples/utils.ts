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
