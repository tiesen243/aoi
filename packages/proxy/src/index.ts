import { ServiceA } from '@aoi/service-a'
import { ServiceB } from '@aoi/service-b'
import * as HttpApi from 'effect/http-api/HttpApi'

export class Api extends HttpApi.make('api')
  .addHttpApi(ServiceA)
  .addHttpApi(ServiceB) {}

const routes = [
  ['^/api/a', process.env.SERVICE_A_URL],
  ['^/api/b', process.env.SERVICE_B_URL],
  ['^/', process.env.WEBSITE_URL],
] as const

export default {
  port: 3000,
  fetch: (request: Request) => {
    const url = new URL(request.url)
    const target = routes.find(([pattern]) =>
      new RegExp(pattern, 'u').test(url.pathname)
    )
    if (!target) return new Response('Not Found', { status: 404 })

    url.protocol = process.env.NODE_ENV === 'production' ? 'https:' : 'http:'
    ;[, url.host = ''] = target
    return fetch(url, request)
  },
}
