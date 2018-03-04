const Sequelize = require('sequelize');

const db = require('../_db');

const User = db.define('user', {
  email: {type: Sequelize.STRING,
    allowNull: false,
    unique: true},
  password: Sequelize.STRING,
  googleId: Sequelize.STRING,
  orders: {type: Sequelize.INTEGER, default: 0}
})

module.exports = User;
