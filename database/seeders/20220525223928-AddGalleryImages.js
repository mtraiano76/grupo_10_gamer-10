'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('ProductGalleryImages', [
      {
        imageUrl: '../images/Imágenes de Juegos PS4/assa/assa1.jpg',
        productId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imageUrl: '../images/Imágenes de Juegos PS4/assa/assa2.jpg',
        productId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imageUrl: '../images/Imágenes de Juegos PS4/assa/assa3.jpg',
        productId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imageUrl: '../images/Imágenes de Juegos PS4/assa/assa4.jpg',
        productId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imageUrl: '../images/Imágenes de Juegos PS4/assa/assa5.jpg',
        productId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imageUrl: '../images/Imágenes de Juegos PS4/assa/assa6.jpg',
        productId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imageUrl: '../images/Imágenes de Juegos PS4/callOfDutyBlackOpsColdWar/callOfDutyBlackOpsColdWar.jpg',
        productId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imageUrl: '../images/Imágenes de Juegos PS4/callOfDutyBlackOpsColdWar/callOfDutyBlackOpsColdWar1.jpg',
        productId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imageUrl: '../images/Imágenes de Juegos PS4/callOfDutyBlackOpsColdWar/callOfDutyBlackOpsColdWar2.jpg',
        productId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imageUrl: '../images/Imágenes de Juegos PS4/callOfDutyBlackOpsColdWar/callOfDutyBlackOpsColdWar3.jpg',
        productId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imageUrl: '../images/Imágenes de Juegos PS4/callOfDutyBlackOpsColdWar/callOfDutyBlackOpsColdWar4.jpeg',
        productId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imageUrl: '../images/Imágenes de Juegos PS4/callOfDutyBlackOpsColdWar/callOfDutyBlackOpsColdWar5.jpeg',
        productId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
