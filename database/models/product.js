'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category, {
        as: 'category',
        foreignKey: 'categoryId'
      });
      Product.belongsTo(models.Languages, {
        as: 'language',
        foreignKey: 'languageId'
      });
      Product.belongsTo(models.Developer, {
        as: 'developer',
        foreignKey: 'developerId'
      });
      Product.belongsTo(models.Producer, {
        as: 'producer',
        foreignKey: 'producerId'
      });

      Product.hasMany(models.ShoppingCartItem, {
        as: 'shoppingCartItems',
        foreignKey: 'productId',
      });

      Product.hasMany(models.ProductGalleryImage, {
        as: 'GalleryImages',
        foreignKey: 'productId',
      });
    }
  }
  Product.init({
    Name: DataTypes.STRING,
    CoverageUrl: DataTypes.STRING,
    Price: DataTypes.DOUBLE,
    ReleaseDate: DataTypes.DATE,
    VideoUrl: DataTypes.STRING,
    PlayersQuantity: DataTypes.INTEGER,
    Description: DataTypes.STRING,
    Discount: DataTypes.DOUBLE,
    IsSuggested: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};