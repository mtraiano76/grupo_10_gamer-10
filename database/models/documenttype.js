'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DocumentType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DocumentType.hasMany(models.Payer, {
        as: 'payer',
        foreignKey: 'payerId',
      });
    }
  }
  DocumentType.init({
    Name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DocumentType',
  });
  return DocumentType;
};