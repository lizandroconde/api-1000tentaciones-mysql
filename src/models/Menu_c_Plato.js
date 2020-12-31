export default (sequelize, DataTypes) => {
    let Menu_Plato =  sequelize.define('Menu_Plato', {
        _id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            defaultValue: null,
            field: 'IdMenuPlato'
        },
        _idplato: {
           type: DataTypes.INTEGER,
           field: 'IdPlato'
        },
        _idmenu: {
           type: DataTypes.INTEGER,
           field: 'IdMenu'
        },
        },
        {
        timestamps: false,
        freezeTableName: true,
        // define the table's name
        tableName: 'tentaciones_menu_plato'
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
        
    return Menu_Plato;
  }