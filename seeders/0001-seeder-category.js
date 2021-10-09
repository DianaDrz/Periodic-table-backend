'use strict';

const { setTimestampsSeeder } = require('../utils/util');

// Datos de producción
let items = [
  {
    nameC: 'Gases nobles'
  },  
  {
    nameC: 'Hálogenos'
  },
  {
    nameC: 'No metales'
  },
  {
    nameC: 'Metaloides'
  },
  {
    nameC: 'Metales de transición'
  },
  {
    nameC: 'Alcalinotérreos'
  },
  {
    nameC: 'Metales Alcalinos'
  },
  {
    nameC: 'Lantanidos'
  },
  {
    nameC: 'Actinidos'
  },
  {
    nameC: 'Otros metales'
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
