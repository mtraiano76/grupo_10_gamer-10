const sequelize = require("sequelize");
const models = require("../models");

module.exports = (sequelize, dataTypes) => {

    const shoppingcartproduct = sequelize.define('ShoppingCartProducts',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            unitprice: {
                type: DataTypes.DOUBLE
            },
            quantity: {
                type: DataTypes.INTEGER
            },
            discount: {
                type: DataTypes.DOUBLE
            },
        },
        {
            tableName: 'shoppingcartproducts',
        });

        payer.associate = function (models) {
            payer.belongsTo(models.shoppingcarts, {
    
                as: "shoppingcart",
    
                foreignKey: "shoppingcart_id"
            });

            payer.belongsTo(models.products, {
    
                as: "product",
    
                foreignKey: "product_id"
            });
        }

    return shoppingcart;
}