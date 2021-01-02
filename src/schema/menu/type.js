// Imports
import {GraphQLObjectType,GraphQLList, GraphQLString, GraphQLInt, GraphQLFloat, GraphQLBoolean} from 'graphql'
import PlatoType from '../plato/type'
// Thought type
const MenuType = new GraphQLObjectType({
  name: 'menu',
  description: '...',

  fields: () => ({
    _id: {type: GraphQLInt},
    nombre: {type: GraphQLString},
    imagen: {type: GraphQLString},
    status: {type: GraphQLBoolean},
    descripcion: {type: GraphQLString},
    tiempo: {type: GraphQLString},
    precio: {type: GraphQLFloat},
    _idcategoria: {type: GraphQLInt},
    Platos:{type: new GraphQLList(PlatoType)}
    
  })
})

export default MenuType