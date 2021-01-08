export default (sequelize, DataTypes) => {
    let Poster =  sequelize.define('Poster', {
        _id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            defaultValue: null,
            field: 'IdPoster'
        },
        imagen: {
           type: DataTypes.TEXT,
           field: 'Imagen'
        },
        slug: {
           type: DataTypes.TEXT,
           field: 'Slug'
        },
        },
        {
        timestamps: false,
        freezeTableName: true,
        // define the table's name
        tableName: 'tentaciones_poster'
        });    
        
      
        
    return Poster;
  }