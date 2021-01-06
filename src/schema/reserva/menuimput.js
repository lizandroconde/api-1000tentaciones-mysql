// Imports
import {GraphQLObjectType,GraphQLList, GraphQLString, GraphQLInt, GraphQLFloat, GraphQLBoolean, GraphQLInputObjectType} from 'graphql'
import ReservaPlatoInput from './platoimput'

// Thought type
const ReservaMenuInput = new GraphQLInputObjectType({
  name: 'reservamenuinput',
  description: '...',

  fields: () => ({
    _idmenu: {type: GraphQLInt},
    total: {type: GraphQLFloat},
    cantidad: {type: GraphQLInt},
    Platos: {type: new GraphQLList(ReservaPlatoInput)}
  })
})

export default ReservaMenuInput