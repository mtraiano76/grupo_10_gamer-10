const sequelize = require("sequelize");
const models = require("../models");

module.exports = (sequelize, dataTypes) => {

    const purshasetype = sequelize.define('PurshaseTypes',
        {
            id: {
                type: dataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            description: {
                type: dataTypes.STRING
            },
        },
        {
            tableName: 'purshasetypes',
        });

    return purshasetype;
}