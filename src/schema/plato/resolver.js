// App Imports
import models from '../../models'


// Get all thoughts
export async function getAll() {
  return await models.Plato.findAll()
}


export async function create(parentValue, { nombre,titulo,status,necesario,tipo }) {
  return await models.Plato.create(  { nombre,titulo,status,necesario,tipo })
}

export async function asig_menu(parentValue, { _idmenu,_idplato  }) {
  return await models.Menu_Plato.create(  { _idmenu,_idplato  })
}

// // Delete thought
// export async function remove(parentValue, {IdImagen}) {
//   return await models.Ciudad.destroy({ where: { IdImagen } })
// }
