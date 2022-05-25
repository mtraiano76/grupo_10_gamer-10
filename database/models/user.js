'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    getFullname() {
      return [this.name, this.lastName].join(' ');
    }
    static associate(models) {
      User.hasMany(models.ShoppingCart, {
        as: 'shoppingCarts',
        foreignKey: 'userId',
      });
    }
  }
  User.init({
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    userType:{
      type:DataTypes.INTEGER,
      defaultValue:0,
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};