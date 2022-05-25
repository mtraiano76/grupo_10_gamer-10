'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Payer.belongsTo(models.DocumentType, {
        as: 'documentType',
        foreignKey: 'documentTypeId'
      });

      Payer.belongsTo(models.AreCode, {
        as: 'areaCode',
        foreignKey: 'areaCodeId'
      });

      Payer.belongsTo(models.ShoppingCart, {
        as: 'shoppingCart',
        foreignKey: 'shoppingCartId'
      });
    }
  }
  Payer.init({
    Name: DataTypes.STRING,
    LastName: DataTypes.STRING,
    Email: DataTypes.STRING,
    PhoneNumber: DataTypes.STRING,
    DocumentNumber: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Payer',
  });
  return Payer;
};