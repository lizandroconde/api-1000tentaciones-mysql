// Imports
import {GraphQLObjectType} from 'graphql'

// App Imports
import * as reserva from './reserva/fields/mutations'
// Mutation
const mutation = new GraphQLObjectType({
  name: 'mutations',
  description: '...',

  fields: {
  ...reserva
    
  }
})

export default mutation
