// Imports
import {GraphQLString, GraphQLInt, GraphQLFloat, GraphQLBoolean} from 'graphql'

// App Imports
import {create} from '../resolver'
import PosterType from '../type'

// Thought create
export const PosterCreate = {
  type: PosterType,
  args: {
   
    imagen: {
      name: 'imagen',
      type: GraphQLString
    },
    slug: {
      name: 'slug',
      type: GraphQLString
    },

  },
  resolve: create
}
