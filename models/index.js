const Sequelize = require('sequelize');

const DB = require("../config/config");

const sequelize = new Sequelize(DB.DBNAME, DB.USER, DB.PASSWORD, {
    host: DB.HOST,
    dialect: DB.dialect,
  });

  const db = {};

  db.Sequelize = Sequelize;
  db.sequelize = sequelize;

  db.element = require('./element')(sequelize,Sequelize);
  db.user = require('./user')(sequelize,Sequelize);
  db.category = require('./category')(sequelize,Sequelize);
  db.group = require('./group')(sequelize,Sequelize);
  db.period = require('./period')(sequelize,Sequelize);

  //Asociation
// categoria con elemento
  db.element.belongsTo(db.category, { foreignKey: { name: 'id_category', allowNull: false } });
  db.category.hasMany(db.element, { foreignKey: { name: 'id_category', allowNull: false } });
// grupo con elemento
  db.element.belongsTo(db.group, { foreignKey: { name: 'id_group', allowNull: false } });
  db.group.hasMany(db.element, { foreignKey: { name: 'id_group', allowNull: false } });
// periodo con elemento
  db.element.belongsTo(db.period, { foreignKey: { name: 'id_period', allowNull: false } });
  db.period.hasMany(db.element, { foreignKey: { name: 'id_period', allowNull: false } });

  module.exports = db;