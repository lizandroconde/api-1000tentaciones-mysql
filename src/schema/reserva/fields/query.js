// Imports
import {GraphQLInt, GraphQLList, GraphQLString} from 'graphql'

// App Imports
import {getAll,getbyId} from '../resolver'
import ReservaType from '../type'

// Thoughts All
export const Reservas = {
  type: new GraphQLList(ReservaType),
  resolve: getAll
}
export const ReservaId = {
  type: ReservaType,
  args: {
    _id: {
      type: GraphQLString
    }
  },
  resolve: getbyId
}


