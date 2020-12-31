// Imports
import {GraphQLInt, GraphQLList, GraphQLString} from 'graphql'

// App Imports
import CategoriaType from '../type'
import {getAll,getAllbyId} from '../resolver'

// Thoughts All
export const Categorias = {
  type: new GraphQLList(CategoriaType),
  resolve: getAll
}

export const CategoriaId = {
  type: new GraphQLList(CategoriaType),
  args:{
    _id:{type: GraphQLInt}
  },
  resolve: getAllbyId
}

