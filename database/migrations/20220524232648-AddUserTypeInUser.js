'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn(
      'Users', // table name
      'userType', // new field name
      {
        type: Sequelize.STRING,
        allowNull: true,
      })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn(
      'Users', // table name
      'userType', // new field name
    )
  }
};
