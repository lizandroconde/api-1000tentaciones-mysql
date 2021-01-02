// Imports
import {GraphQLObjectType,GraphQLList, GraphQLString, GraphQLInt, GraphQLFloat, GraphQLBoolean} from 'graphql'
import TipoType from '../tipo/type'
// Thought type
 
const PlatoType = new GraphQLObjectType({
  name: 'plato',
  description: '...',

  fields: () => ({
    _id: {type: GraphQLInt},
    nombre: {type: GraphQLString},
    titulo: {type: GraphQLString},
    status: {type: GraphQLBoolean},
    tipo: {type: GraphQLString},
    Tipos: {type: new GraphQLList(TipoType)}
    
  })
})

export default PlatoType