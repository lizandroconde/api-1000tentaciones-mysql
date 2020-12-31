// Imports
import {GraphQLInt, GraphQLList, GraphQLString} from 'graphql'

// App Imports
import CategoriaType from '../type'
import {getAll} from '../resolvers'

// Thoughts All
export const Categorias = {
  type: new GraphQLList(CategoriaType),
  resolve: getAll
}

