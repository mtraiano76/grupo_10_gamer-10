const sequelize = require("sequelize");
const models = require("../models");

module.exports = (sequelize, dataTypes) => {

    const payment = sequelize.define('Payments',
        {
            id: {
                type: dataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            externalreference: {
                type: dataTypes.STRING
            },
            creationdate: {
                type: dataTypes.DATE
            },
            expirationdate: {
                type: dataTypes.DATE
            },
            approvaldate: {
                type: dataTypes.DATE
            },
            status: {
                type: dataTypes.STRING
            },
            ammount: {
                type: dataTypes.DOUBLE
            },
        },
        {
            tableName: 'paymets',
        });

    payment.associate = function (models) {
        payment.belongsTo(models.shoppingcarts, {

            as: "shoppingcart",

            foreignKey: "shoppingcart"
        });
    }

    return payment;
}