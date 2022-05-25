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
      'Products', // table name
      'categoryId', // new field name
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Categories',
          key: 'id'
        }
      });

      await queryInterface.addColumn(
        'Products', // table name
        'developerId', // new field name
        {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'Developers',
            key: 'id'
          }
        });

        await queryInterface.addColumn(
          'Products', // table name
          'languageId', // new field name
          {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: 'Languages',
              key: 'id'
            }
          });

          await queryInterface.addColumn(
            'Products', // table name
            'producerId', // new field name
            {
              type: Sequelize.INTEGER,
              allowNull: false,
              references: {
                model: 'Producers',
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
      'Products', // table name
      'categoryId', // new field name
    );

    await queryInterface.removeColumn(
      'Products', // table name
      'developerId', // new field name
    );

    await queryInterface.removeColumn(
      'Products', // table name
      'languageId', // new field name
    );

    await queryInterface.removeColumn(
      'Products', // table name
      'producerId', // new field name
    );
  }
};
