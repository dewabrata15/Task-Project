'use strict';

const { hashPassword } = require('../helpers/bcrypt');

/** @type {import('sequelize-cli').Migration} */
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
    const fs = require('fs')
    const data = JSON.parse(fs.readFileSync('../server/data/users.json', 'utf-8'))
    const dataComplete = await Promise.all(data.map(async (el) => {
      el.createdAt = new Date()
      el.updatedAt = new Date()
      el.password = await hashPassword(el.password)
      return el;
    }))

    await queryInterface.bulkInsert('Users', dataComplete);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users",{},
    {
      truncate : true,
      restartIndenity: true,
    }
    );
  }
};
