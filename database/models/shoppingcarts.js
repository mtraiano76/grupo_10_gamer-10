const sequelize = require("sequelize");
const models = require("../models");

module.exports = (sequelize, dataTypes) => {

    const shoppingcart = sequelize.define('ShoppingCarts',
        {
            id: {
                type: dataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            totalprice: {
                type: dataTypes.DOUBLE
            },
        },
        {
            tableName: 'shoppingcarts',
        });

        shoppingcart.associate = function (models) {
            shoppingcart.belongsTo(models.users, {
    
                as: "user",
    
                foreignKey: "user_id"
            });

            shoppingcart.belongsTo(models.purhsasestates, {
    
                as: "purshasestatus",
    
                foreignKey: "purshasestatus_id"
            });
        }

    return shoppingcart;
}