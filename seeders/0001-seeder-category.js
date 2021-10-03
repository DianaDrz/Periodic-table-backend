'use strict';

const { setTimestampsSeeder } = require('../utils/util');

// Datos de producción
let items = [
  {
    name: 'Gases nobles'
  },  
  {
    name: 'Hálogenos'
  },
  {
    name: 'No metales'
  },
  {
    name: 'Metaloides'
  },
  {
    name: 'Metales de transición'
  },
  {
    name: 'Alcalinotérreos'
  },
  {
    name: 'Metales Alcalinos'
  },
  {
    name: 'Lantanidos'
  },
  {
    name: 'Actinidos'
  },
  {
    name: 'Otros metales'
  },
];


// Asignando datos de log y timestamps a los datos
items = setTimestampsSeeder(items);

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('categories', items, {});
  },

  down (queryInterface, Sequelize) { }
};
