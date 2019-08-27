'use strict';

const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};


const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.User = require('./user')(sequelize, Sequelize);
db.Todo = require('./todo')(sequelize, Sequelize);

db.User.hasMany(db.Todo, {foreignKey: 'UserId', sourceKey: 'id'});
db.Todo.belongsTo(db.User, {foreignKey: 'UserId', targetKey: 'id'});


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
