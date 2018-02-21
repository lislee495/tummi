const Sequelize = require('sequelize');

const db = require('../_db');

const Dish = db.define('dish', {
  name: {type: Sequelize.STRING,
    allowNull: false},
  description: Sequelize.TEXT,
  price: Sequelize.FLOAT,
  category: DataTypes.Array(DataTypes.STRING)
})

module.exports = Dish;
