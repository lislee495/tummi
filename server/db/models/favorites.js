const Sequelize = require('sequelize');

const db = require('../_db');

const Favorites = db.define('favorite', {
  user_id: Sequelize.INTEGER,
  dish_id: Sequelize.INTEGER,
  restaurant_id: Sequelize.INTEGER
})
module.exports = Favorites;

