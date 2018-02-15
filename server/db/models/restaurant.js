const Sequelize = require('sequelize');

const db = require('../_db');

const Restaurant = db.define('restaurant', {
  name: {type: Sequelize.STRING,
    allowNull: false},
  address: {type: Sequelize.STRING,
    allowNull: false},
  phone_number: Sequelize.STRING,
  categories: Sequelize.ARRAY(Sequelize.TEXT)
})

module.exports = Restaurant;
