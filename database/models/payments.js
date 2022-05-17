const sequelize = require("sequelize");
const models = require("../models");

module.exports = (sequelize, dataTypes) => {

    const payment = sequelize.define('Payments',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            externalreference: {
                type: DataTypes.STRING
            },
            creationdate: {
                type: DataTypes.DATETIME
            },
            expirationdate: {
                type: DataTypes.DATETIME
            },
            approvaldate: {
                type: DataTypes.DATETIME
            },
            status: {
                type: DataTypes.STRING
            },
            ammount: {
                type: DataTypes.DOUBLE
            },
        },
        {
            tableName: 'paymets',
        });

    payer.associate = function (models) {
        payer.belongsTo(models.shoppingcarts, {

            as: "shoppingcart",

            foreignKey: "shoppingcart"
        });
    }

    return payment;
}