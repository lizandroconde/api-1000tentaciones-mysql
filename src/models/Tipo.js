export default (sequelize, DataTypes) => {
    let Tipo =  sequelize.define('Tipo', {
        _id: {
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
        
       Tipo.associate = models => {
        Tipo.belongsTo(models.Plato,{
            foreignKey:{
                name:'_idplato',
                field:'IdPLato'
            }
        })
        

         }
        
    return Tipo;
  }