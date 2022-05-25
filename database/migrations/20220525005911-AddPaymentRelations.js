'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.addColumn(
      'Payments', // table name
      'shoppingCartId', // new field name
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'ShoppingCarts',
          key: 'id'
        }
      });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.removeColumn(
      'Payments', // table name
      'shoppingCartId', // new field name
    );
  }
};
