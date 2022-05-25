'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PurchaseState extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PurchaseState.hasMany(models.ShoppingCart, {
        as: 'shoppingCarts',
        foreignKey: 'purchaseStateId',
      });
    }
  }
  PurchaseState.init({
    Name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PurchaseState',
  });
  return PurchaseState;
};