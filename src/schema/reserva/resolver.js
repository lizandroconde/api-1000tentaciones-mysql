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





export async function create(parentValue, {nombre,contacto,direccion,total,Menus }) {
  let f = new Date();

  let crip = "123QWERTYUIOPA456SDFGHJKLZXCVBNM789";

  let _id = `BK-${f.getDate() < 10 ? `0${f.getDate()}` : f.getDate()}${
    f.getMonth() + 1 < 10 ? `0${f.getMonth() + 1}` : f.getMonth()
  }${f.getFullYear()}`;

  let longitud = 5;

  for (let i = 0; i < longitud; i++) {
    _id += crip[Math.floor(Math.random() * (crip.length - 1))];
  }
  
  
  let Reserva_ = await models.Reserva.create({_id,nombre,contacto,direccion,total})
  for(let menu of Menus){
      let { _idmenu,total,cantidad,Platos} = menu
      let Menu_ = await models.Reserva_Menu.create({_idreserva:Reserva_._id,_idmenu,total,cantidad});
      for(let plato of Platos){
        let {_idplato,Tipos} = plato
        let Plato_ = await models.Reserva_Plato.create({_idreservamenu:Menu_._id,_idplato});
        for(let tipo of Tipos){
          let {_idtipo} = tipo
          await models.Reserva_Tipo.create({_idreservaplato:Plato_._id,_idtipo})
        }
     }
  }
  return {
    _id: Reserva_._id
  }
}

export async function createMenu(parentValue, { CodReserva,_idmenu,cantidad,total }) {
 
  return await models.Reserva_Menu.create(  { _idreserva:CodReserva,_idmenu,cantidad,total})
}

export async function createPlato(parentValue, {_idreservamenu,_idplato }) {
 
  return await models.Reserva_Plato.create( {_idreservamenu,_idplato })
}

export async function createTipo(parentValue, {_idreservaplato,_idtipo }) {
 
  return await models.Reserva_Tipo.create( {_idreservaplato,_idtipo })
}

// // Delete thought
// export async function remove(parentValue, {IdImagen}) {
//   return await models.Ciudad.destroy({ where: { IdImagen } })
// }
