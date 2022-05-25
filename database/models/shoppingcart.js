'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShoppingCart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ShoppingCart.belongsTo(models.User, {
        as: 'user',
        foreignKey: 'userId'
      });

      ShoppingCart.belongsTo(models.PurchaseState, {
        as: 'purchaseState',
        foreignKey: 'purchaseStateId'
      });

      ShoppingCart.hasMany(models.ShoppingCartItem, {
        as: 'shoppingCartItems',
        foreignKey: 'shoppingCartId',
      });

      ShoppingCart.hasOne(models.Payer, {
        as: 'payer',
        foreignKey: 'shoppingCartId',
      });

      ShoppingCart.hasMany(models.Payment, {
        as: 'payments',
        foreignKey: 'shoppingCartId',
      });
    }
  }
  ShoppingCart.init({
    TotalPrice: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'ShoppingCart',
  });
  return ShoppingCart;
};