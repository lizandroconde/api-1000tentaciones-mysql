export default (sequelize, DataTypes) => {
    let Reserva_Menu =  sequelize.define('Reserva_Menu', {
        _id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            defaultValue: null,
            field: 'IdReservaMenu'
        },
        _idreserva: {
           type: DataTypes.STRING(255),
           field: 'CodReserva'
        },
        _idmenu:{
            type: DataTypes.INTEGER,
           field: 'IdMenu'
        },
        cantidad:{
            type: DataTypes.INTEGER,
           field: 'Cantidad'
        },
        total:{
            type: DataTypes.FLOAT(16,2),
            field: 'Total'
        }
         
        },
        {
        timestamps: false,
        freezeTableName: true,
        // define the table's name
        tableName: 'tentaciones_reserva_menu'
        });    
        
        Reserva_Menu.associate = models => {
           
            
            Reserva_Menu.hasMany(models.Reserva_Plato,{
                as: "Platos",foreignKey:{
                    name:'IdReservaMenu',
                    field:'IdReservaMenu'
                }
            })
            Reserva_Menu.belongsTo(models.Menu,{
                as: "Menu",foreignKey:{
                    name:'IdMenu',
                    field:'IdMenu'
                }
            })
            


        }
        
        
    
        
    return Reserva_Menu;
  }