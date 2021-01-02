export default (sequelize, DataTypes) => {
    let Reserva_Tipo =  sequelize.define('Reserva_Tipo', {
        _id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            defaultValue: null,
            field: 'IdReservaTipo'
        },
        _idreservaplato: {
           type: DataTypes.INTEGER,
           field: 'IdReservaPlato'
        },
        _idtipo:{
            type: DataTypes.INTEGER,
           field: 'IdTipo'
        }
         
        },
        {
        timestamps: false,
        freezeTableName: true,
        // define the table's name
        tableName: 'tentaciones_reserva_tipo'
        });    
        

        Reserva_Tipo.associate = models => {
           
            
            Reserva_Tipo.belongsTo(models.Tipo,{
                as: "Tipo",foreignKey:{
                    name:'_id',
                    field:'IdReservaTipo'
                }
            })
            


        }
        
        
    return Reserva_Tipo;
  }