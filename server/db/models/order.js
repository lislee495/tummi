const Sequelize = require('sequelize');

const db = require('../_db');

const Order = db.define('order', {
  user_id: Sequelize.INTEGER,
  dish_id: Sequelize.INTEGER,
  restaurant_id: Sequelize.INTEGER,
  status: Sequelize.STRING,
  createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW }
})
module.exports = Order;
