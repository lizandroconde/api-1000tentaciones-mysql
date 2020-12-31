// Imports
import {GraphQLString, GraphQLInt, GraphQLFloat, GraphQLBoolean} from 'graphql'

// App Imports
import {create} from '../resolver'
import PlatoType from '../type'

// Thought create
export const PlatoCreate = {
  type: PlatoType,
  args: {
   
    nombre: {
      name: 'nombre',
      type: GraphQLString
    },
    cod: {
      name: 'cod',
      type: GraphQLString
    },
    precio: {
        name: 'precio',
        type: GraphQLBoolean
    },
     
    status: {
      name: 'tiempo',
      type: GraphQLBoolean
    },
    _idplato: {
      name: '_idplato',
      type: GraphQLBoolean
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