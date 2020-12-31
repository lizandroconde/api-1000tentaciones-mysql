// Imports
import {GraphQLString, GraphQLInt, GraphQLFloat} from 'graphql'

// App Imports
import {create} from '../resolvers'
import CategoriaType from '../type'

// Thought create
export const CategoriaCreate = {
  type: CategoriaType,
  args: {
    nombre: {
      name: 'nombre',
      type: GraphQLString
    },
    imagen: {
        name: 'imagen',
        type: GraphQLString
    },
  },
  resolve: create
}

// Thought remove
// export const ImagenRemove = {
//   type: ImagenType,
//   args: {
//     IdImagen: {
//       name: 'IdImagen',
//       type: GraphQLInt
//     }
//   },
//   resolve: remove
// }