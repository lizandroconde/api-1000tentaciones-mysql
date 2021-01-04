// Imports
import {GraphQLObjectType,GraphQLList, GraphQLString, GraphQLInt, GraphQLFloat, GraphQLBoolean} from 'graphql'

 
const Menu_PlatoType = new GraphQLObjectType({
  name: 'menu_plato',
  description: '...',

  fields: () => ({
    _id: {type: GraphQLInt},
    _idplato: {type: GraphQLInt},
    _idmenu: {type: GraphQLInt},
  })
})

export default Menu_PlatoType