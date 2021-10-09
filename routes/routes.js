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
    .post(verifyToken,element.createElement);
  
enrutador
    .route('/element/:id')
    .put(verifyToken,element.updateElement)
    .delete(verifyToken,element.deleteElement);

//Rutas para ordenar de diferente manera
enrutador
    .route('/orderCategory1')
    .get(element.orderElementsCategory);
enrutador
    .route('/orderGroups')
    .get(element.orderElementsGroups);
enrutador
    .route('/orderPeriod')
    .get(element.orderElementsPeriod);
enrutador
    .route('/orderCategory')
    .get(category.orderElementsCategory);

//rutas para Users
enrutador
    .route('/user')
    .get(user.getUser)
    .post(user.createUser);
enrutador
    .route('/user/:id')
    .put(user.updateUser)
    .delete(verifyToken,user.deleteUser);

//rutas para Category
enrutador
    .route('/category')
    .get(category.getCategory)
    .post(verifyToken,category.createCategory);
enrutador
    .route('/category/:id')
    .put(verifyToken,category.updateCategory)
    .delete(verifyToken,category.deleteCategory);

//rutas para Group
enrutador
    .route('/group')
    .get(group.getGroup)
    .post(verifyToken,group.createGroup);
enrutador
    .route('/group/:id')
    .put(verifyToken,group.updateGroup)
    .delete(verifyToken,group.deleteGroup);

//rutas para Period
enrutador
    .route('/period')
    .get(period.getPeriod)
    .post(verifyToken,period.createPeriod);
enrutador
    .route('/period/:id')
    .put(verifyToken,period.updatePeriod)
    .delete(verifyToken,period.deletePeriod);

//rutas para genralities
enrutador
    .route('/login')
    .post(generalities.login);


module.exports = enrutador;