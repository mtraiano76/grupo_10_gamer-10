const sequelize = require("sequelize");
const models = require("../models");

module.exports = (sequelize, dataTypes) => {

    const purshasetype = sequelize.define('PurshaseTypes',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            description: {
                type: DataTypes.STRING
            },
        },
        {
            tableName: 'purshasetypes',
        });

    return payer;
}