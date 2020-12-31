// Imports
import {GraphQLObjectType,GraphQLList, GraphQLString, GraphQLInt, GraphQLFloat, GraphQLBoolean} from 'graphql'
import MenuType from '../menu/type'
import ReservaPlatoType from './platostype'
// Thought type
const ReservaMenuType = new GraphQLObjectType({
  name: 'reservamenu',
  description: '...',

  fields: () => ({
    _id: {type: GraphQLInt},
    Menu: {type: MenuType},
    total: {type: GraphQLFloat},
    cantidad: {type: GraphQLInt},
    Platos:{type: new GraphQLList(ReservaPlatoType)}
  })
})

export default ReservaMenuType