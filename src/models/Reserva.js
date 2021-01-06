
export default (sequelize, DataTypes) => {
    let Reserva =  sequelize.define('Reserva', {
        _id: {
            type: DataTypes.STRING(255),
            primaryKey: true,
            field: 'CodReserva'
        },
        nombre: {
           type: DataTypes.STRING(255),
           field: 'Nombre'
        },
        direccion: {
           type: DataTypes.STRING(255),
           field: 'Direccion'
        },
        contacto: {
            type: DataTypes.STRING(255),
            field: 'Contacto'
        },
        total: {
            type: DataTypes.FLOAT(16,2),
            field: 'Total'
        },
        metodo: {
            type: DataTypes.STRING(255),
            field: 'Metodo'
        },
        referencia: {
            type: DataTypes.STRING(255),
            field: 'Referencia'
        },
        fecha: {
            type: DataTypes.STRING(255),
            field: 'Fecha'
        },
        hora: {
            type: DataTypes.STRING(255),
            field: 'Hora'
        },
        },
        {
        timestamps: false,
        freezeTableName: true,
        // define the table's name
        tableName: 'tentaciones_reserva'
        });    
        

        Reserva.associate = models => {
           
            
            Reserva.hasMany(models.Reserva_Menu,{
                as: "Menus",foreignKey:{
                    name:'CodReserva',
                    field:'CodReserva'
                }
            })
            


        }
        
        
        

        // Actividad_Traductor.associate = models => {
        //     Actividad_Traductor.belongsTo(models.Idioma,{
        //         foreignKey:{
        //             name:'IdIdioma',
        //             field:'IdIdioma'
        //         },
        //          as:'Idiomas'
        //     });
            

        //     Actividad_Traductor.belongsTo(models.Actividad,{
        //         foreignKey:{
        //             name:'IdActividad',
        //             field:'IdActividad'
        //         },
        //          as:'Actividades'
        //     });

        // }
        
    return Reserva;
  }