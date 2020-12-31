// Imports
import {GraphQLID, GraphQLInt, GraphQLList, GraphQLString} from 'graphql'

// App Imports
import MenuType from '../type'
import {getAll, getbyId} from '../resolver'

// Thoughts All
export const Menus = {
  type: new GraphQLList(MenuType),
  resolve: getAll 
}

export const MenuId={
  type:  MenuType,
  args:{
    _id: {type: GraphQLInt}
  },
  resolve: getbyId
}

