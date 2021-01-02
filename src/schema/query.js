// Imports

import {GraphQLObjectType} from 'graphql'

// App Imports
import * as categoria from './categoria/fields/query'
import * as menu from './menu/fields/query'
import * as plato from './plato/fields/query'
import * as tipo from './tipo/fields/query'
import * as reserva from './reserva/fields/query'
// Mutatio
const query = new GraphQLObjectType({
  name: 'query',
  description: '...',

  fields: {
   ...categoria,
   ...menu,
   ...plato,
   ...tipo,
   ...reserva,
  }
})

export default query
