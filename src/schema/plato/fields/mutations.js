// Imports
import {GraphQLString, GraphQLInt, GraphQLFloat, GraphQLBoolean} from 'graphql'

// App Imports
import {create,asig_menu} from '../resolver'
import PlatoType from '../type'
import Menu_PlatoType from '../menu_plato'

// Thought create
export const PlatoCreate = {
  type: PlatoType,
  args: {
   
    nombre: {
      name: 'nombre',
      type: GraphQLString
    },
    titulo: {
      name: 'titulo',
      type: GraphQLString
    },
    tipo: {
        name: 'tipo',
        type: GraphQLString
    },
    necesario: {
      name: 'necesario',
      type: GraphQLBoolean
    }, 
    status: {
      name: 'status',
      type: GraphQLBoolean
    }
  },
  resolve: create
}

export const AsigPlato = {
  type: Menu_PlatoType,
  args: {
   
    _idplato: {
      name: '_idplato',
      type: GraphQLInt
    },
    _idmenu: {
      name: '_idmenu',
      type: GraphQLInt
    },
  },
  resolve: asig_menu
}