import { Sequelize, DataTypes } from "sequelize";

export const createWeatherModel = async(sequelize) => {
    const Weather = sequelize.define(
        //Model Name
        'Weather',     
        //Attributes                   
        {      
            firstName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            lastName: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            // token: {
            //     type: DataTypes.STRING
            // },
            location: {
                type: DataTypes.JSONB,
                allowNull: false,
            },
            current: {
                type: DataTypes.JSONB,
                allowNull: false
            }
        },
        {
            tableName: "weather"
        }
    );
    return Weather;
}