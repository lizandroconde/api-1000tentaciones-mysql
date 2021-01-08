// Imports
import Sequelize from 'sequelize';



// App Imports
import databaseConnection from '../setup/databaseConnection'

let models = {
	Categoria: databaseConnection.import('./Categoria'),
	Menu: databaseConnection.import('./Menu'),
	Plato: databaseConnection.import('./Plato'),
	Menu_Plato: databaseConnection.import('./Menu_c_Plato'),
	Tipo: databaseConnection.import('./Tipo'),
	Reserva: databaseConnection.import('./Reserva'),
	Reserva_Menu: databaseConnection.import('./Reserva_Menu'),
	Reserva_Plato: databaseConnection.import('./Reserva_Plato'),
	Reserva_Tipo: databaseConnection.import('./Reserva_Tipo'),
	Poster: databaseConnection.import('./Poster'),
	
};



Object.keys(models).forEach(key =>{
	if (models[key].hasOwnProperty('associate')){
		models[key].associate(models);
	}
});


models.sequelize = databaseConnection
models.Sequelize = Sequelize

export default models
