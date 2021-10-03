'use strict';

const { setTimestampsSeeder } = require('../utils/util');

// Datos de producción
let items = [
  {
    name: 'Admin',
    email:'admin@yopmail.com',
    password:'654321'
  },  
  {
    name: 'Dayana',
    email:'diana@yopmail.com',
    password:'123456'
  },
];


// Asignando datos de log y timestamps a los datos
items = setTimestampsSeeder(items);

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', items, {});
  },

  down (queryInterface, Sequelize) { }
};
