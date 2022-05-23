const sequelize = require("sequelize");
const models = require("../models");

module.exports = (sequelize, dataTypes) => {

    const product = sequelize.define('Products',
        {
            id: {
                type: dataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: dataTypes.STRING
            },
            coverageurl: {
                type: dataTypes.STRING
            },
            price: {
                type: dataTypes.STRING
            },
            relasedate: {
                type: dataTypes.DATE
            },
            videourl: {
                type: dataTypes.STRING
            },
            playersquantity: {
                type: dataTypes.INTEGER
            },
            description: {
                type: dataTypes.STRING
            },
            discount: {
                type: dataTypes.DOUBLE
            },
            issuggested: {
                type: dataTypes.BOOLEAN
            },
        },
        {
            tableName: 'products',
        });

    product.associate = function (models) {
        product.belongsTo(models.producercompanies, {

            as: "producer",

            foreignKey: "producer_id"
        });
        product.belongsTo(models.developercompanies, {

            as: "developer",

            foreignKey: "developer_id"
        });
        product.belongsTo(models.idioms, {

            as: "languaje",

            foreignKey: "languaje_id"
        });
        product.belongsTo(models.categories, {

            as: "category",

            foreignKey: "category_id"
        });
    }

    return product;
}