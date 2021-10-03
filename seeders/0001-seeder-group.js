'use strict';

const { setTimestampsSeeder } = require('../utils/util');

// Datos de producción
let items = [
  {
    description: 'Grupo 1'
  },
  {
    description: 'Grupo 2'
  },
  {
    description: 'Grupo 3'
  }, 
  {
    description: 'Grupo 4'
  },
  {
    description: 'Grupo 5'
  },
  {
    description: 'Grupo 6'
  },
  {
    description: 'Grupo 7'
  },
  {
    description: 'Grupo 8'
  },
  {
    description: 'Grupo 9'
  },
  {
    description: 'Grupo 10'
  },
  {
    description: 'Grupo 11'
  },
  {
    description: 'Grupo 12'
  },
  {
    description: 'Grupo 13'
  },
  {
    description: 'Grupo 14'
  },
  {
    description: 'Grupo 15'
  },
  {
    description: 'Grupo 16'
  },
  {
    description: 'Grupo 17'
  },
  {
    description: 'Grupo 18'
  },
];


// Asignando datos de log y timestamps a los datos
items = setTimestampsSeeder(items);

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('groups', items, {});
  },

  down (queryInterface, Sequelize) { }
};
