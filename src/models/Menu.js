export default (sequelize, DataTypes) => {
    let Menu =  sequelize.define('Menu', {
        _id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            defaultValue: null,
            field: 'IdMenu'
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
        descripcion: {
            type: DataTypes.TEXT,
            field: 'Descripcion'
        },
        precio: {
            type: DataTypes.FLOAT(16,2),
            field: 'Precio'
        },
        tiempo: {
            type: DataTypes.STRING(225),
            field: 'Tiempo'
        },
        _idcategoria: {
            type: DataTypes.INTEGER,
            field: 'IdCategoria'
        },
        slug: {
            type: DataTypes.STRING(225),
            field: 'Slug'
        },
        
        },
        {
        timestamps: false,
        freezeTableName: true,
        // define the table's name
        tableName: 'tentaciones_menu'
        });    
        
        Menu.associate = models => {
            Menu.belongsToMany(models.Plato,{
                through: models.Menu_Plato,
                    foreignKey:{
                        name:'_id',
                        field:'IdMenu'
                    }
                });
            


        }
        
    return Menu;
  }