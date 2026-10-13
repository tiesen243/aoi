#!/usr/bin/env bun

import { cp, mkdir, rm } from 'node:fs/promises'
import path from 'node:path'

const ROOT = path.resolve(import.meta.dirname, '..')
const OUTPUT = path.join(ROOT, 'out')

await rm(OUTPUT, { recursive: true, force: true })

await mkdir(OUTPUT, { recursive: true })

console.log('Pruning monorepo...')

await cp(path.join(ROOT, 'package.json'), path.join(OUTPUT, 'package.json'))
await cp(path.join(ROOT, 'bun.lock'), path.join(OUTPUT, 'bun.lock'))

async function prune(type: 'apps' | 'packages') {
  const source = path.join(ROOT, type)
  const destination = path.join(OUTPUT, type)

  const files = await Array.fromAsync(
    new Bun.Glob('*/package.json').scan({
      cwd: source,
      onlyFiles: true,
    })
  )

  const promises = files.map(async (file) => {
    const workspace = path.dirname(file)

    console.log(`Pruning ${type}/${workspace}`)
    await mkdir(path.join(destination, workspace), { recursive: true })
    await cp(path.join(source, file), path.join(destination, file))
  })

  await Promise.all(promises)
}

await prune('apps')
await prune('packages')
