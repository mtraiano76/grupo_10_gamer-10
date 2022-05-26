'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('AreCodes', [
      {
        name: '+57',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '+54',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

    await queryInterface.bulkInsert('Languages', [
      {
        name: 'Inglés',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Español',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Portugués',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Acción',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Disparos',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Deportes',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pelea',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Rol',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Carreras',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

    await queryInterface.bulkInsert('Developers', [
      {
        name: 'Ubisoft',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'EA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Actvision',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Capcom',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bethesda Softworks',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

    await queryInterface.bulkInsert('DocumentTypes', [
      {
        name: 'DNI',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pasaporte',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

    await queryInterface.bulkInsert('Producers', [
      {
        name: 'Ubisoft',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Blizzard',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Microsoft',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sony',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

    await queryInterface.bulkInsert('PurchaseStates', [
      {
        name: 'Abierto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pendiente de pago',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pago rechazado',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pago aprobado',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('AreCodes', null, {});
     await queryInterface.bulkDelete('Languages', null, {});
     await queryInterface.bulkDelete('Categories', null, {});
     await queryInterface.bulkDelete('Developers', null, {});
     await queryInterface.bulkDelete('DocumentTypes', null, {});
     await queryInterface.bulkDelete('Producers', null, {});
     await queryInterface.bulkDelete('PurchaseStates', null, {});
  }
};
