// Imports
import {GraphQLObjectType,GraphQLList, GraphQLString, GraphQLInt, GraphQLFloat, GraphQLBoolean} from 'graphql'
// Thought type
const CategoriaType = new GraphQLObjectType({
  name: 'categoria',
  description: '...',

  fields: () => ({
    _id: {type: GraphQLInt},
    nombre: {type: GraphQLString},
    imagen: {type: GraphQLString},
    status: {type: GraphQLBoolean},
    
  })
})

export default CategoriaType