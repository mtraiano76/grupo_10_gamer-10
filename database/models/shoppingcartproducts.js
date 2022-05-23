const sequelize = require("sequelize");
const models = require("../models");

module.exports = (sequelize, dataTypes) => {

    const shoppingcartproduct = sequelize.define('ShoppingCartProducts',
        {
            id: {
                type: dataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            unitprice: {
                type: dataTypes.DOUBLE
            },
            quantity: {
                type: dataTypes.INTEGER
            },
            discount: {
                type: dataTypes.DOUBLE
            },
        },
        {
            tableName: 'shoppingcartproducts',
        });

        shoppingcartproduct.associate = function (models) {
            shoppingcartproduct.belongsTo(models.shoppingcarts, {
    
                as: "shoppingcart",
    
                foreignKey: "shoppingcart_id"
            });

            shoppingcartproduct.belongsTo(models.products, {
    
                as: "product",
    
                foreignKey: "product_id"
            });
        }

    return shoppingcartproduct;
}