// Imports
import {GraphQLInt, GraphQLList, GraphQLString} from 'graphql'

// App Imports
import TipoType from '../type'
import {getAll} from '../resolver'

// Thoughts All
export const Tipos = {
  type: new GraphQLList(TipoType),
  resolve: getAll
}

