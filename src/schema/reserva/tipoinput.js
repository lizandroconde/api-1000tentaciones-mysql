// Imports
import {GraphQLObjectType,GraphQLList, GraphQLString, GraphQLInt, GraphQLFloat, GraphQLBoolean, GraphQLInputObjectType} from 'graphql'
 
// Thought type
const ReservaTipoInput = new GraphQLInputObjectType({
  name: 'reservatipoinput',
  description: '...',

  fields: () => ({
    _idtipo: {type: GraphQLInt},
  })
})

export default ReservaTipoInput