// oxlint-disable max-classes-per-file

import * as HttpApi from 'effect/http-api/HttpApi'
import * as HttpApiEndpoint from 'effect/http-api/HttpApiEndpoint'
import * as HttpApiGroup from 'effect/http-api/HttpApiGroup'
import * as Schema from 'effect/Schema'

class AGroup extends HttpApiGroup.make('a').add(
  HttpApiEndpoint.get('index', '/', {
    success: Schema.Struct({
      message: Schema.String,
    }),
  })
) {}

export default class Api extends HttpApi.make('api')
  .add(AGroup)

  .prefix('/api/a') {}
