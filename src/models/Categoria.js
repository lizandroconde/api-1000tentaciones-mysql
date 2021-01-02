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
        
        Categoria.associate = models => {
            Categoria.hasMany(models.Menu,{
                as: "Menus",
                foreignKey:{
                    name:'IdCategoria',
                    field:'IdCategoria'
                }  
                });
            


        }
        
    return Categoria;
  }