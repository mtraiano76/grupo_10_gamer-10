const sequelize = require("sequelize");
const models = require("../models");

module.exports = (sequelize, dataTypes) => {

    const payer = sequelize.define('Payers',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING
            },
            lastname: {
                type: DataTypes.STRING
            },
            email: {
                type: DataTypes.STRING
            },
            phonenumber: {
                type: DataTypes.STRING
            },
            documentnumber: {
                type: DataTypes.STRING
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