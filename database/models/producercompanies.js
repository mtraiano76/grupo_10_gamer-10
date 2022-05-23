const sequelize = require("sequelize");
const models = require("../models");

module.exports = (sequelize, dataTypes) => {

    const procudercompany = sequelize.define('ProducerCompanies',
        {
            id: {
                type: dataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: dataTypes.STRING
            }
        },
        {
            tableName: 'producercompanies',
        });

    return procudercompany;
}