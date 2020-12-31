export default (sequelize, DataTypes) => {
    let Tipo =  sequelize.define('Tipo', {
        _idmenu: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            defaultValue: null,
            field: 'IdTipo'
        },
        nombre: {
           type: DataTypes.STRING(255),
           field: 'Nombre'
        },
        cod: {
           type: DataTypes.STRING(255),
           field: 'Cod'
        },
        status: {
            type: DataTypes.BOOLEAN,
            field: 'Status'
        },
        precio: {
            type: DataTypes.FLOAT(16,2),
            field: 'Precio'
        },
        _idplato: {
            type: DataTypes.INTEGER,
            field: 'IdPlato'
        },
        },
        {
        timestamps: false,
        freezeTableName: true,
        // define the table's name
        tableName: 'tentaciones_tipo'
        });    
        
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
        
    return Tipo;
  }