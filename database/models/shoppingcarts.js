const sequelize = require("sequelize");
const models = require("../models");

module.exports = (sequelize, dataTypes) => {

    const shoppingcart = sequelize.define('ShoppingCarts',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            totalprice: {
                type: DataTypes.DOUBLE
            },
        },
        {
            tableName: 'shoppingcarts',
        });

        payer.associate = function (models) {
            payer.belongsTo(models.users, {
    
                as: "user",
    
                foreignKey: "user_id"
            });

            payer.belongsTo(models.purhsasestates, {
    
                as: "purshasestatus",
    
                foreignKey: "purshasestatus_id"
            });
        }

    return shoppingcart;
}