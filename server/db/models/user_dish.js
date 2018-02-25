const Sequelize = require('sequelize');

const db = require('../_db');

const UserDish = db.define('user_dish', {
  user_id: Sequelize.INTEGER,
  dish_id: Sequelize.INTEGER,
  status: Sequelize.ARRAY(Sequelize.STRING),
  createdAt: Sequelize.DATE
})
