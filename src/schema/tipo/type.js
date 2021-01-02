// Imports
import {GraphQLObjectType,GraphQLList, GraphQLString, GraphQLInt, GraphQLFloat, GraphQLBoolean} from 'graphql'
// Thought type
const TipoType = new GraphQLObjectType({
  name: 'tipo',
  description: '...',

  fields: () => ({
    _id: {type: GraphQLInt},
    nombre: {type: GraphQLString},
    cod: {type: GraphQLString},
    status: {type: GraphQLBoolean},
    precio: {type: GraphQLString},
    _idplato: {type: GraphQLInt},
    
  })
})

export default TipoType