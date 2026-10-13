import * as HttpRouter from 'effect/http/HttpRouter'
import * as HttpServer from 'effect/http/HttpServer'
import * as Layer from 'effect/Layer'

import { api } from '@/server'

const { handler } = HttpRouter.toWebHandler(
  api.pipe(Layer.provide(HttpServer.layerServices)),
  { disableLogger: true }
)

export { default as ServiceA } from '@/api'
export default {
  port: 3001,
  fetch: handler,
}
