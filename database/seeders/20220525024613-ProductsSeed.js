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
    await queryInterface.bulkInsert('Products', [
      {
        name: 'Assassin’s Creed Valhalla',
        coverageUrl: '../images/Imágenes de Juegos PS4/Assassin’s Creed Valhalla.jpg',
        price: 20000,
        videoUrl: 'https://youtu.be/L0Fr3cS3MtY',
        playersQuantity: 1,
        ReleaseDate: new Date(2020,11,22),
        description: 'Encarna a Eivor, un legendario saqueador vikingo en busca de la gloria. Explora la edad oscura inglesa conforme atacas a tus enemigos, haces crecer tus asentamientos y construyes tu poder político.',
        discount: 0,
        isSuggested: true,
        categoryId: 1,
        developerId: 1,
        languageId: 1,
        producerId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Black Ops Cold War',
        coverageUrl: '../images/Imágenes de Juegos PS4/Call of Duty Black Ops Cold War.jpg',
        price: 30000,
        videoUrl: 'https://youtu.be/SvNTIPZTulk',
        playersQuantity: 1,
        ReleaseDate: new Date(2020,5,22),
        description: 'Un grupo de varios soldados dejaran de lado sus diferencias por una causa común: detener un complot nazi secreto en los últimos días de la Segunda Guerra Mundial.',
        discount: 0,
        isSuggested: false,
        categoryId: 2,
        developerId: 3,
        languageId: 1,
        producerId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Products', null, {});
  }
};
