// Imports
import {GraphQLString, GraphQLInt, GraphQLFloat, GraphQLBoolean} from 'graphql'

// App Imports
import {create} from '../resolver'
import TipoType from '../type'

// Thought create
export const TipoCreate = {
  type: TipoType,
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
        type: GraphQLFloat
    },
     
    status: {
      name: 'status',
      type: GraphQLBoolean
    },
    _idplato: {
      name: '_idplato',
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