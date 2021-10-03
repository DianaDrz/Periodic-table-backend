'use strict';

const config  = require('./config');

let configSeeder = {
  'development': {
    'username': config.USER,
    'password': config.PASSWORD,
    'database': config.DBNAME,
    'host': config.HOST,
    'seederStorage': 'sequelize',
    'seederStorageTableName': 'sequelize_seeders',
    'dialect': config.dialect,
    'ssl': false,
    'dialectOptions': {
      ssl: false
    }
  },
  'production': {
    'username': config.USER,
    'password': config.PASSWORD,
    'database': config.DBNAME,
    'host': config.HOST,
    'seederStorage': 'sequelize',
    'seederStorageTableName': 'sequelize_seeders',
    'dialect': config.dialect,
    'ssl': false,
    'dialectOptions': {
      ssl: false
    }
  }
};

module.exports = configSeeder;
