'use strict';
const data = require('./photos.json')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
      data.forEach(el => {
        el.createdAt = new Date()
        el.updatedAt = new Date()
      })

      await queryInterface.bulkInsert('Photos', data, {})
    

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     await queryInterface.bulkDelete('Photos', null, {})
  }
};
