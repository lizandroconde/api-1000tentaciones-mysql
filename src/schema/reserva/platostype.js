// Imports
import {GraphQLObjectType,GraphQLList, GraphQLString, GraphQLInt, GraphQLFloat, GraphQLBoolean} from 'graphql'
import PlatoType from '../plato/type'
import ReservaTipoType from './tipotype'

// Thought type
const ReservaPlatoType = new GraphQLObjectType({
  name: 'reservaplato',
  description: '...',

  fields: () => ({
    _id: {type: GraphQLInt},
    _idreservamenu: {type: GraphQLInt},
    _idplato: {type: GraphQLInt},
    Plato: { type: PlatoType},
    Tipos: {type: new GraphQLList(ReservaTipoType)}
  })
})

export default ReservaPlatoType