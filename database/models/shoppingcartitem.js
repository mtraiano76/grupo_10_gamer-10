'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShoppingCartItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ShoppingCartItem.belongsTo(models.ShoppingCart, {
        as: 'shoppingCart',
        foreignKey: 'shoppingCartId'
      });

      ShoppingCartItem.belongsTo(models.Product, {
        as: 'product',
        foreignKey: 'productId'
      });
    }
  }
  ShoppingCartItem.init({
    UnitPrice: DataTypes.DOUBLE,
    TotalPrice: DataTypes.DOUBLE,
    Quantity: DataTypes.INTEGER,
    Discount: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'ShoppingCartItem',
  });
  return ShoppingCartItem;
};