import { Api } from '@aoi/proxy'
import * as Context from 'effect/Context'
import * as HttpApiClient from 'effect/http-api/HttpApiClient'
import * as FetchHttpClient from 'effect/http/FetchHttpClient'
import * as Layer from 'effect/Layer'

export class ApiClient extends Context.Service<
  ApiClient,
  HttpApiClient.ForApi<typeof Api>
>()('ApiClient', {
  make: HttpApiClient.make(Api),
}) {
  public static readonly layer = Layer.effect(this, this.make).pipe(
    Layer.provide(FetchHttpClient.layer)
  )
}
