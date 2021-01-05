export default (sequelize, DataTypes) => {
    let Reserva_Plato =  sequelize.define('Reserva_Plato', {
        _id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            defaultValue: null,
            field: 'IdReservaPlato'
        },
        _idreservamenu: {
           type: DataTypes.INTEGER,
           field: 'IdReservaMenu'
        },
        _idplato:{
            type: DataTypes.INTEGER,
           field: 'IdPlato'
        },
        },
        {
        timestamps: false,
        freezeTableName: true,
        // define the table's name
        tableName: 'tentaciones_reserva_plato'
        });    
        
        Reserva_Plato.associate = models => {
           
            
            Reserva_Plato.hasMany(models.Reserva_Tipo,{
                as: "Tipos",foreignKey:{
                    name:'IdReservaPlato',
                    field:'IdReservaPlato'
                }
            })
            
            Reserva_Plato.belongsTo(models.Plato,{
                as: "Plato",foreignKey:{
                    name:'IdPlato',
                    field:'IdPlato'
                }
            })
            
             

        }

        
    
        
    return Reserva_Plato;
  }