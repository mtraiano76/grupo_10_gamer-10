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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'Ya existe un usuario con esta dirección de correo'
      },
      validate: {
        isEmail: {
          msg: 'Email no valido'
        },
        notEmpty: {
          msg: 'Ingrese un email'
        }
      }
    },
    password:{
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Ingrese una contraseña'
        }
      }
    },
    userType: {
      type: DataTypes.STRING,
      defaultValue: 'common',
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};