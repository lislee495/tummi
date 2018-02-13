const Sequelize = require('sequelize');

const db = require('../_db');

const Menus = db.define('menus', {
  name: {type: Sequelize.STRING,
    allowNull: false},
  address: {type: Sequelize.STRING,
    allowNull: false},
  phone_number: Sequelize.STRING,
  categories: Sequelize.ARRAY(Sequelize.TEXT)
})
