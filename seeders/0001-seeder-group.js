'use strict';

const { setTimestampsSeeder } = require('../utils/util');

// Datos de producción
let items = [
  {
    numberGroup: '1'
  },
  {
    numberGroup: '2'
  },
  {
    numberGroup: '3'
  }, 
  {
    numberGroup: '4'
  },
  {
    numberGroup: '5'
  },
  {
    numberGroup: '6'
  },
  {
    numberGroup: '7'
  },
  {
    numberGroup: '8'
  },
  {
    numberGroup: '9'
  },
  {
    numberGroup: '10'
  },
  {
    numberGroup: '11'
  },
  {
    numberGroup: '12'
  },
  {
    numberGroup: '13'
  },
  {
    numberGroup: '14'
  },
  {
    numberGroup: '15'
  },
  {
    numberGroup: '16'
  },
  {
    numberGroup: '17'
  },
  {
    numberGroup: '18'
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
