// Imports
import {GraphQLObjectType,GraphQLList, GraphQLString, GraphQLInt, GraphQLFloat, GraphQLBoolean} from 'graphql'
import TipoType from '../tipo/type'
// Thought type
 
const PosterType = new GraphQLObjectType({
  name: 'poster',
  description: '...',

  fields: () => ({
    _id: {type: GraphQLInt},
    imagen: {type: GraphQLString},
    slug: {type: GraphQLString}
    
  })
})

export default PosterType