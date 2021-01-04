// Imports
import {GraphQLString, GraphQLInt, GraphQLFloat, GraphQLBoolean} from 'graphql'

// App Imports
import {create} from '../resolver'
import MenuType from '../type'

// Thought create
export const MenuCreate = {
  type: MenuType,
  args: {
    nombre: {
      name: 'nombre',
      type: GraphQLString
    },
    imagen: {
        name: 'imagen',
        type: GraphQLString
    },
    status: {
      name: 'status',
      type: GraphQLBoolean
   },
    descripcion: {
        name: 'descripcion',
        type: GraphQLString
    },
    precio: {
      name: 'precio',
      type: GraphQLFloat
    }, 
    tiempo: {
      name: 'tiempo',
      type: GraphQLString
    },
    _idcategoria: {
      name: '_idcategoria',
      type: GraphQLInt
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