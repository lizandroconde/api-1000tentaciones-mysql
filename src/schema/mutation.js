// Imports
import {GraphQLObjectType} from 'graphql'

// App Imports
import * as menu from './menu/fields/mutations'
import * as plato from './plato/fields/mutations'
import * as tipo from './tipo/fields/mutations'
import * as reserva from './reserva/fields/mutations'
// Mutation
const mutation = new GraphQLObjectType({
  name: 'mutations',
  description: '...',

  fields: {
  ...menu,
  ...plato,
  ...tipo,
  ...reserva
    
  }
})

export default mutation