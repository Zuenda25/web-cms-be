'use strict';
const uuid = require('uuid');
const moment = require('moment');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      id: uuid.v4(),
      userName: 'itadmin',
      fullName: 'IT Admin',
      emailAddress: 'itadmin@ropanasuri.com',
      sexId: 1,
      roleId: 1,
      password: '$2a$12$re0l1/P//ytGpxuVB6STXOzHH38ukTpFrY5hfS5/ViGSM9aNHjEL2',
      isActive: true,
      createdAt: moment().toISOString(),
      createdBy: 'Database Seeder',
      createdFrom: 'Sequelize CLI Seeder',
      updatedAt: moment().toISOString(),
      updatedBy: 'Database Seeder',
      updatedFrom: 'Sequelize CLI Seeder',
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
