// App Imports
import models from '../../models'


// Get all thoughts
export async function getAll() {
  return await models.Poster.findAll()
}


export async function create(parentValue, { imagen,slug}) {
  return await models.Poster.create(  { imagen,slug})
}


// // Delete thought
// export async function remove(parentValue, {IdImagen}) {
//   return await models.Ciudad.destroy({ where: { IdImagen } })
// }
