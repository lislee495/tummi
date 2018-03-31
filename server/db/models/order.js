const Sequelize = require('sequelize');

const db = require('../_db');

const Order = db.define('order', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  orderNum: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  user_id: {
    type: Sequelize.INTEGER,
  },
  dish_id: {
    type: Sequelize.INTEGER,
  },
  restaurant_id: {
    type: Sequelize.INTEGER,
  },
  status: Sequelize.STRING,
  total: Sequelize.FLOAT,
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
  quantity: Sequelize.INTEGER
})
module.exports = Order;