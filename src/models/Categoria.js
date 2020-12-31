export default (sequelize, DataTypes) => {
    let Categoria =  sequelize.define('Categoria', {
        _id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            defaultValue: null,
            field: 'IdCategoria'
        },
        nombre: {
           type: DataTypes.STRING(255),
           field: 'Nombre'
        },
        imagen: {
           type: DataTypes.STRING(255),
           field: 'Imagen'
        },
        status: {
            type: DataTypes.BOOLEAN,
            field: 'Status'
        },
        },
        {
        timestamps: false,
        freezeTableName: true,
        // define the table's name
        tableName: 'tentaciones_categoria'
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
        
    return Categoria;
  }