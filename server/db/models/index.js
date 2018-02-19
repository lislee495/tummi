//work on this
const db = require('../_db');
const Dish = require('./dish');
const Restaurant = require('./restaurant');
const User = require('./user');

Restaurant.hasMany(Dish, {
  foreignKey: 'owner_id',
  onDelete: 'cascade',
  hooks: true
});

Dish.belongsTo(Restaurant, {as: 'owner'});

module.exports = {
	db,
	Restaurant,
	User,
  Dish
};
