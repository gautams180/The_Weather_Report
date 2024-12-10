import { Sequelize } from 'sequelize';
import { createUserModel } from '../models/User.js';
import { createWeatherModel } from '../models/Weather.js';

const sequelize = new Sequelize('Aasa Tech', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres'
  });

let UserModel = null;
let WeatherModel = null;

const connection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        UserModel = await createUserModel(sequelize);
        WeatherModel = await createWeatherModel(sequelize);
        await sequelize.sync({ alter: true });
        console.log("Database Synced");
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

export {connection, UserModel, WeatherModel}