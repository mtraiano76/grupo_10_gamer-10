const sequelize = require("sequelize");
const models = require("../models");

module.exports = (sequelize, dataTypes) => {

    const payer = sequelize.define('Payers',
        {
            id: {
                type: dataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: dataTypes.STRING
            },
            lastname: {
                type: dataTypes.STRING
            },
            email: {
                type: dataTypes.STRING
            },
            phonenumber: {
                type: dataTypes.STRING
            },
            documentnumber: {
                type: dataTypes.STRING
            },
        },
        {
            tableName: 'users',
        });

    payer.associate = function (models) {
        payer.belongsTo(models.areacodes, {

            as: "areacode",

            foreignKey: "areacode_id"
        });
        payer.belongsTo(models.documenttypes, {

            as: "documenttype",

            foreignKey: "documenttype_id"
        });
        payer.belongsTo(models.shoppingcarts, {

            as: "shoppingcart",

            foreignKey: "shoppingcart_id"
        });
    }

    return payer;
}