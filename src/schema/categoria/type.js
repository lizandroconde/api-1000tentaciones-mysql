// Imports
import {GraphQLObjectType,GraphQLList, GraphQLString, GraphQLInt, GraphQLFloat, GraphQLBoolean} from 'graphql'
import MenuType from '../menu/type'
// Thought type
const CategoriaType = new GraphQLObjectType({
  name: 'categoria',
  description: '...',

  fields: () => ({
    _id: {type: GraphQLInt},
    nombre: {type: GraphQLString},
    imagen: {type: GraphQLString},
    status: {type: GraphQLBoolean},
    slug: {type: GraphQLString},
    Menus: {type: new GraphQLList(MenuType)}
  })
})

export default CategoriaType