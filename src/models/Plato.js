export default (sequelize, DataTypes) => {
    let Plato =  sequelize.define('Plato', {
        _id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            defaultValue: null,
            field: 'IdPlato'
        },
        nombre: {
           type: DataTypes.STRING(255),
           field: 'Nombre'
        },
        titulo: {
           type: DataTypes.STRING(255),
           field: 'Titulo'
        },
        status: {
            type: DataTypes.BOOLEAN,
            field: 'Status'
        },
        necesario: {
            type: DataTypes.BOOLEAN,
            field: 'Necesario'
        },
        tipo: {
            type: DataTypes.STRING(20),
            field: 'Tipo'
        },
        },
        {
        timestamps: false,
        freezeTableName: true,
        // define the table's name
        tableName: 'tentaciones_plato'
        });    
        

        Plato.associate = models => {
            Plato.belongsToMany(models.Menu,{
                through: models.Menu_Plato,
                    foreignKey:{
                        name:'_id',
                        field:'IdPlato'
                    }
                });
            
            Plato.hasMany(models.Tipo,{
                as: "Tipos",foreignKey:{
                    name:'_id',
                    field:'IdPlato'
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
        
    return Plato;
  }