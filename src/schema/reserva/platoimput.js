// Imports
import {GraphQLObjectType,GraphQLList, GraphQLString, GraphQLInt, GraphQLFloat, GraphQLBoolean, GraphQLInputObjectType} from 'graphql'
import ReservaTipoInput from './tipoinput'


// Thought type
const ReservaPlatoInput = new GraphQLInputObjectType({
  name: 'reservaplatoiinput',
  description: '...',

  fields: () => ({
    _idplato: {type: GraphQLInt},
    Tipos:{type: new GraphQLList(ReservaTipoInput)}
  })
})

export default ReservaPlatoInput