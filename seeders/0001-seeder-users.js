'use strict';

const { setTimestampsSeeder } = require('../utils/util');

const text= require('../utils/text');

// Datos de producción
let items = [
  {
    name: 'Admin',
    email:'admin@yopmail.com',
  },  
  {
    name: 'Dayana',
    email:'diana@yopmail.com',
  },
];


// Asignando datos de log y timestamps a los datos
items = setTimestampsSeeder(items);

/*module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', items, {});
  },

  down (queryInterface, Sequelize) { }
};*/

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      let hash = await text.hashPass('123456');
      for (let item of items) {
        item.password = hash;
      }
      await queryInterface.bulkInsert('users', items, {});
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  },

  down (queryInterface, Sequelize) { }
};
