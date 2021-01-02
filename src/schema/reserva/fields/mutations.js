// Imports
import {GraphQLString, GraphQLInt, GraphQLFloat, GraphQLBoolean, GraphQLList} from 'graphql'

// App Imports
import {create} from '../resolver'
 


export const ReservaCreate={
  args:{
    nombre: {
      name: 'nombre',
      type: GraphQLString,
    },
    contacto: {
      name: 'contacto',
      type: GraphQLString,
    },
    direccion: {
      type: GraphQLString,
      name: 'direccion'
    },
    total: {
      name: 'total',
      type:  GraphQLFloat
    }
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