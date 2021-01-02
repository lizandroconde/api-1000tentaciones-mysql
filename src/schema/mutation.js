// Imports
import {GraphQLObjectType} from 'graphql'

// App Imports
import * as categoria from './categoria/fields/mutations'
// Mutation
const mutation = new GraphQLObjectType({
  name: 'mutations',
  description: '...',

  fields: {
  ...categoria
    
  }
})

export default mutation
