// App Imports
import models from '../../models'


// Get all thoughts
export async function getAll() {
  return await models.Reserva.findAll()
}

export async function getbyId(parentValue,{_id}) {
  return await models.Reserva.findOne({
    include:[{
      model: models.Reserva_Menu,
      as: 'Menus',
      include:[
        {
          model: models.Menu,
          as:'Menu'
        },
        {
        model: models.Reserva_Plato,
        as: "Platos",
        include:[
          {
            model:models.Plato,
            as:"Plato"
          }
          ,{
          model: models.Reserva_Tipo,
          as: 'Tipos',
          include: {
            model: models.Tipo,
            as: "Tipo"
          }
        }]
      }]
    }],
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
