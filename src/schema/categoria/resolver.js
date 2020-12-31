// App Imports
import models from '../../models'


// Get all thoughts
export async function getAll() {
  return await models.Categoria.findAll()
}

// // Create thought
// export async function create(parentValue, { DireccionImagen }) {
//   return await models.Ciudad.create( {DireccionImagen })
// }

// // Delete thought
// export async function remove(parentValue, {IdImagen}) {
//   return await models.Ciudad.destroy({ where: { IdImagen } })
// }
