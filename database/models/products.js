const sequelize = require("sequelize");
const models = require("../models");

module.exports = (sequelize, dataTypes) => {

    const product = sequelize.define('Products',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING
            },
            coverageurl: {
                type: DataTypes.STRING
            },
            price: {
                type: DataTypes.STRING
            },
            relasedate: {
                type: DataTypes.DATETIME
            },
            videourl: {
                type: DataTypes.STRING
            },
            playersquantity: {
                type: DataTypes.INTEGER
            },
            description: {
                type: DataTypes.STRING
            },
            discount: {
                type: DataTypes.DOUBLE
            },
            issuggested: {
                type: DataTypes.BOOLEAN
            },
        },
        {
            tableName: 'products',
        });

    payer.associate = function (models) {
        payer.belongsTo(models.producercompanies, {

            as: "producer",

            foreignKey: "producer_id"
        });
        payer.belongsTo(models.developercompanies, {

            as: "developer",

            foreignKey: "developer_id"
        });
        payer.belongsTo(models.idioms, {

            as: "languaje",

            foreignKey: "languaje_id"
        });
        payer.belongsTo(models.categories, {

            as: "category",

            foreignKey: "category_id"
        });
    }

    return payer;
}