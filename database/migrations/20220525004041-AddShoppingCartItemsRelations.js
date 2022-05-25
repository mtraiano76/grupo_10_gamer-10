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
      'ShoppingCartItems', // table name
      'shoppingCartId', // new field name
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'ShoppingCarts',
          key: 'id'
        }
      });

    await queryInterface.addColumn(
      'ShoppingCartItems', // table name
      'productId', // new field name
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Products',
          key: 'id'
        }
      });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn(
      'ShoppingCartItems', // table name
      'shoppingCartId', // new field name
    );

    await queryInterface.removeColumn(
      'ShoppingCartItems', // table name
      'productId', // new field name
    );
  }
};
