import { promises as fs } from 'node:fs'

async function readFile({ path }) {
  const data =  await fs.readFile(path, 'utf-8')
  return JSON.stringify(data)
}

export default readFile