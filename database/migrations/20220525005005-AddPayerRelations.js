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
      'Payers', // table name
      'documentTypeId', // new field name
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'DocumentTypes',
          key: 'id'
        }
      });

    await queryInterface.addColumn(
      'Payers', // table name
      'areaCodeId', // new field name
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'AreCodes',
          key: 'id'
        }
      });

    await queryInterface.addColumn(
      'Payers', // table name
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

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn(
      'Payers', // table name
      'areaCodeId', // new field name
    );

    await queryInterface.removeColumn(
      'Payers', // table name
      'shoppingCartId', // new field name
    );

    await queryInterface.removeColumn(
      'Payers', // table name
      'documentTypeId', // new field name
    );
  }
};
