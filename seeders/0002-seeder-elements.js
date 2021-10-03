'use strict';

const { setTimestampsSeeder } = require('../utils/util');

// Datos de producción
let items = [
  {
    typeElement:'Perteneciente a no metal',
    name: 'Hidrogeno',
    symbolQ:'H',
    atomicNumber:1,
    atomicMass:'1,0',
    image:'',
    id_category:1,
    id_group:1,
    id_period:1
  },  /*
  {
    typeElement:'Perteneciente a metales alcalinos',
    name: 'Litio',
    symbolQ:'Li',
    atomicNumber:3,
    atomicMass:'6,9',
    image:'',
    id_category:7,
    id_group:2,
    id_period:2
  },
  {
    typeElement:'Perteneciente a los metal alcalinos',
    name: 'Hidrogeno',
    symbolQ:'Na',
    atomicNumber:11,
    atomicMass:'23,0',
    image:'',
    id_category:3,
    id_group:3,
    id_period:3
  },
  {
    typeElement:'Perteneciente a los metales alcalinos',
    name: 'Potasio',
    symbolQ:'k',
    atomicNumber:19,
    atomicMass:'39,1',
    image:'',
    id_category:3,
    id_group: 4,
    id_period:4
  },*/
];


// Asignando datos de log y timestamps a los datos
items = setTimestampsSeeder(items);

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('elements', items, {});
  },

  down (queryInterface, Sequelize) { }
};
