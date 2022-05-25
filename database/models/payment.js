'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Payment.belongsTo(models.ShoppingCart, {
        as: 'shoppingCart',
        foreignKey: 'shoppingCartId'
      });
    }
  }
  Payment.init({
    ExternalReference: DataTypes.STRING,
    ExpirationDate: DataTypes.DATE,
    ApprovalDate: DataTypes.DATE,
    Status: DataTypes.STRING,
    Amount: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Payment',
  });
  return Payment;
};