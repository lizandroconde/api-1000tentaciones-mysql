// Imports
import {GraphQLObjectType,GraphQLList, GraphQLString, GraphQLInt, GraphQLFloat, GraphQLBoolean} from 'graphql'
import MenuType from '../menu/type'
import ReservaMenuType from './menutype'
// Thought type
const ReservaType = new GraphQLObjectType({
  name: 'reserva',
  description: '...',

  fields: () => ({
    _id: {type: GraphQLInt},
    nombre: {type: GraphQLString},
    direccion: {type: GraphQLString},
    contacto: {type: GraphQLString},
    total: {type: GraphQLString},
    Menus: {type: new GraphQLList(ReservaMenuType)}
  })
})

export default ReservaType