// Imports
import {GraphQLInt, GraphQLList, GraphQLString} from 'graphql'

// App Imports
import {getAll} from '../resolver'
import PosterType from '../type'

// Thoughts All
export const Posters = {
  type: new GraphQLList(PosterType),
  resolve: getAll
}

