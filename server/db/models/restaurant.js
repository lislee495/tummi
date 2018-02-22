const Sequelize = require('sequelize');

const db = require('../_db');

const Restaurant = db.define('restaurant', {
  name: {type: Sequelize.STRING,
    allowNull: false},
  category: Sequelize.STRING,
  address: Sequelize.STRING,
  latitude: Sequelize.STRING,
  longitude: Sequelize.STRING,
  price_range: Sequelize.STRING,
  zomato_id: Sequelize.STRING,
  url: Sequelize.STRING,
  featured_image: Sequelize.STRING,
  user_rating: Sequelize.STRING,
  votes: Sequelize.STRING,
  phone_numbers: Sequelize.STRING
})

module.exports = Restaurant;
