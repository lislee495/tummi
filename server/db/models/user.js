const Sequelize = require('sequelize');

const db = require('../_db');

const User = db.define('user', {
  username: {type: Sequelize.STRING,
    allowNull: false,
    unique: true},
  email: {type: Sequelize.STRING,
    allowNull: false,
    unique: true},
  password: Sequelize.STRING
})
