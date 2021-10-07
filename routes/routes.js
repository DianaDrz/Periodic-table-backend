const express = require('express');
const enrutador = express.Router();

const element = require('../controllers/element');
const user = require('../controllers/user');
const category = require('../controllers/category');
const group = require('../controllers/group');
const period = require('../controllers/period');
const generalities = require('../controllers/generalities');
const {verifyToken} = require('../middelware/authorization');

//rutas para elements
enrutador
    .route('/element')
    .get(element.getElement)
    .post(element.createElement);
  
enrutador
    .route('/element/:id')
    .put(element.updateElement)
    .delete(element.deleteElement);

//Rutas para ordenar de diferente manera
enrutador
    .route('/orderCategory')
    .get(element.orderElementsCategory);
enrutador
    .route('/orderGroups')
    .get(element.orderElementsGroups);
enrutador
    .route('/orderPeriod')
    .get(element.orderElementsPeriod);

//rutas para Users
enrutador
    .route('/user')
    .get(user.getUser)
    .post(user.createUser);
enrutador
    .route('/user/:id')
    .put(user.updateUser)
    .delete(user.deleteUser);

//rutas para Category
enrutador
    .route('/category')
    .get(category.getCategory)
    .post(category.createCategory);
enrutador
    .route('/category/:id')
    .put(category.updateCategory)
    .delete(category.deleteCategory);

//rutas para Group
enrutador
    .route('/group')
    .get(group.getGroup)
    .post(group.createGroup);
enrutador
    .route('/group/:id')
    .put(group.updateGroup)
    .delete(group.deleteGroup);

//rutas para Period
enrutador
    .route('/period')
    .get(period.getPeriod)
    .post(period.createPeriod);
enrutador
    .route('/period/:id')
    .put(period.updatePeriod)
    .delete(period.deletePeriod);

//rutas para genralities
enrutador
    .route('/login')
    .post(generalities.login);


module.exports = enrutador;