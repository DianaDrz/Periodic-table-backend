'use strict';
const { setTimestampsSeeder } = require('../utils/util');

// Datos de producción
let items = [
  {
    description: 'Periodo 1'
  },
  {
    description: 'Periodo 2'
  },
  {
    description: 'Periodo 3'
  },
  {
    description: 'Periodo 4'
  },
  {
    description: 'Periodo 5'
  },
  {
    description: 'Periodo 6'
  },
  {
    description: 'Periodo 7'
  }
];


// Asignando datos de log y timestamps a los datos
items = setTimestampsSeeder(items);

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('periods', items, {});
  },

  down (queryInterface, Sequelize) { }
};
