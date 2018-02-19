//work on this
const db = require('../_db');
const Dish = require('./dish');
const Restaurant = require('./restaurant');
const User = require('./user');
const Menu = require('./menu');

Restaurant.hasOne(Menu, {
  foreignKey: 'owner_id',
  onDelete: 'cascade',
  hooks: true
});

Dish.belongsTo(Restaurant, {as: 'owner'});
//through menu
module.exports = {
	db,
	Restaurant,
	User,
  Dish
};
