// App Imports
import models from '../../models'


// Get all thoughts
export async function getAll() {
  return await models.Tipo.findAll()
}



// // Create thought
export async function create( {nombre,cod,status,preci,_idplato}) {
  return await models.Tipo.create( {nombre,cod,status,preci,_idplato})
}

// // Delete thought
// export async function remove(parentValue, {IdImagen}) {
//   return await models.Ciudad.destroy({ where: { IdImagen } })
// }
