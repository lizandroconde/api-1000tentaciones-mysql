// Imports
import {GraphQLObjectType} from 'graphql'

// App Imports
import * as menu from './menu/fields/mutations'
import * as plato from './plato/fields/mutations'
import * as tipo from './tipo/fields/mutations'
import * as reserva from './reserva/fields/mutations'
import * as poster from './poster/fields/mutations'
// Mutation
const mutation = new GraphQLObjectType({
  name: 'mutations',
  description: '...',

  fields: {
  ...menu,
  ...plato,
  ...tipo,
  ...reserva,
  ...poster,
    
  }
})

export default mutation