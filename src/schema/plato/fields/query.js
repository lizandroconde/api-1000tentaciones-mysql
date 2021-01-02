// Imports
import {GraphQLInt, GraphQLList, GraphQLString} from 'graphql'

// App Imports
import PlatoType from '../type'
import {getAll} from '../resolver'

// Thoughts All
export const Platos = {
  type: new GraphQLList(PlatoType),
  resolve: getAll
}

