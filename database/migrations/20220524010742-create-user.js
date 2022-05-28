'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
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
      password: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: {
            msg: 'Ingrese una contraseña'
          }
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};