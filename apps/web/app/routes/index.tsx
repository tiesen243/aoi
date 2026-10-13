import { useQuery } from '@tanstack/react-query'

import { api } from '@/lib/runtime'

import type { Route } from './+types/index'

export const meta = (_args: Route.MetaArgs) => [
  { title: 'New React Router App' },
  { name: 'description', content: 'Welcome to React Router!' },
]

export default function Home() {
  const aQuery = useQuery(api.a.index.queryOptions())
  const bQuery = useQuery(api.b.index.queryOptions())

  return (
    <main className='container mx-auto p-4'>
      <h1>Welcome to React Router</h1>
      <pre>{JSON.stringify({ a: aQuery.data, b: bQuery.data }, null, 2)}</pre>
    </main>
  )
}
