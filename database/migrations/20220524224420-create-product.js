'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Name: {
        type: Sequelize.STRING
      },
      CoverageUrl: {
        type: Sequelize.STRING
      },
      Price: {
        type: Sequelize.DOUBLE
      },
      ReleaseDate: {
        type: Sequelize.DATE
      },
      VideoUrl: {
        type: Sequelize.STRING
      },
      PlayersQuantity: {
        type: Sequelize.INTEGER
      },
      Description: {
        type: Sequelize.STRING
      },
      Discount: {
        type: Sequelize.DOUBLE
      },
      IsSuggested: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Products');
  }
};