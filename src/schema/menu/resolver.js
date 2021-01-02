// App Imports
import models from '../../models'


// Get all thoughts
export async function getAll() {
  return await models.Menu.findAll()
}

export async function getbyId(parentValue,{_id}) {
  return await models.Menu.findOne({
    include:{
      model: models.Plato,
      required:true,
      include:{
        required:true,
        model: models.Tipo,
        as:'Tipos'
      }
    },
    where:{
      _id
    }
  })
}
// // Create thought
// export async function create(parentValue, { DireccionImagen }) {
//   return await models.Ciudad.create( {DireccionImagen })
// }

// // Delete thought
// export async function remove(parentValue, {IdImagen}) {
//   return await models.Ciudad.destroy({ where: { IdImagen } })
// }
