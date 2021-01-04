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
      include:{ 
        model: models.Tipo,
        as:'Tipos'
      }
    },
    where:{
      _id
    }
  })
}

export async function create(parentValue, { nombre,imagen,status,descripcion,precio,tiempo,_idcategoria }) {
   return await models.Menu.create( { nombre,imagen,status,descripcion,precio,tiempo,_idcategoria })
}

// // Delete thought
// export async function remove(parentValue, {IdImagen}) {
//   return await models.Ciudad.destroy({ where: { IdImagen } })
// }
