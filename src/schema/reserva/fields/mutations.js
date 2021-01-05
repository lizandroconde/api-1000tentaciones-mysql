// Imports
import {GraphQLString, GraphQLInt, GraphQLFloat, GraphQLBoolean, GraphQLList, GraphQLInputObjectType} from 'graphql'
import ReservaType from '../type'

// App Imports
import {create,createMenu,createPlato,createTipo,} from '../resolver'
import ReservaMenuType from '../menutype'
import ReservaPlatoType from '../platostype'
import ReservaTipoType from '../tipotype'
 
 

export const ReservaCreate={
  type: ReservaType,
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
    },
     
  },
  resolve: create
}


export const ReservaMenuCreate={
  type: ReservaMenuType,
  args:{
    CodReserva: {
      name: 'CodReserva',
      type: GraphQLString,
    },
    _idmenu: {
      name: '_idmenu',
      type: GraphQLInt,
    },
    cantidad: {
      type: GraphQLInt,
      name: 'cantidad'
    },
    total: {
      name: 'total',
      type:  GraphQLFloat
    },
     
  },
  resolve: createMenu
}


export const ReservaPlatoCreate={
  type: ReservaPlatoType,
  args:{
    _idreservamenu: {
      name: '_idreservamenu',
      type: GraphQLInt,
    },
    _idplato: {
      name: '_idplato',
      type: GraphQLInt,
    },
     
  },
  resolve: createPlato
}


export const ReservaTipoCreate={
  type: ReservaTipoType,
  args:{
    _idreservaplato: {
      name: '_idreservaplato',
      type: GraphQLInt,
    },
    _idtipo: {
      name: '_idtipo',
      type: GraphQLInt,
    },
     
  },
  resolve: createTipo
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