import * as Effect from 'effect/Effect'
import * as HttpApiBuilder from 'effect/http-api/HttpApiBuilder'
import * as Layer from 'effect/Layer'

import Api from '@/api'

const AGroupLayer = HttpApiBuilder.group(Api, 'a', (handlers) =>
  handlers.handle('index', () =>
    Effect.succeed({ message: 'Hello from Service A!' })
  )
)

export const api = HttpApiBuilder.layer(Api, {
  openapiPath: '/openapi.json',
}).pipe(Layer.provide([AGroupLayer]))
