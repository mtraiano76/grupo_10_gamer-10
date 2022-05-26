'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductGalleryImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      ProductGalleryImage.belongsTo(models.Product, {
        as: 'product',
        foreignKey: 'productId'
      });
    }
  }
  ProductGalleryImage.init({
    ImageUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ProductGalleryImage',
  });
  return ProductGalleryImage;
};