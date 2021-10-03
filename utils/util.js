'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');



const pk = {
  primaryKey: true,
  autoIncrement: true,
  type: Sequelize.INTEGER,
  xlabel: 'ID'
};

/*const timestamps = {
  /*_user_created: {
    type: Sequelize.INTEGER,
    allowNull: false,
    label: lang.t('fields._user_created')
  },
  _user_updated: {
    type: Sequelize.INTEGER,
    label: lang.t('fields._user_updated')
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: false,
    label: "",
    defaultValue: Sequelize.NOW
  },
  updatedAt: {
    type: Sequelize.DATE,
    xlabel: lang.t('fields._updated_at')
  }
};*/

function setTimestamps (fields) {
  return Object.assign(fields, timestamps);
}

function setTimestampsSeeder (arr, idUser = 1) {
  arr.map((el, index) => {
    arr[index] = Object.assign(el, {
      //_user_created: idUser,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  });

  return arr;
}



module.exports = {
  setTimestamps,
  setTimestampsSeeder,
};
