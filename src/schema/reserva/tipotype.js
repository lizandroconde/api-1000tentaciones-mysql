// Imports
import {GraphQLObjectType,GraphQLList, GraphQLString, GraphQLInt, GraphQLFloat, GraphQLBoolean} from 'graphql'
import TipoType from '../tipo/type'
 
// Thought type
const ReservaTipoType = new GraphQLObjectType({
  name: 'reservatipo',
  description: '...',

  fields: () => ({
    _id: {type: GraphQLInt},
    _idreservaplato: {type: GraphQLInt},
    _idtipo: {type: GraphQLInt},
    Tipo: {type: TipoType}
  })
})

export default ReservaTipoType