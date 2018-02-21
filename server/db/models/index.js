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
Menu.belongsTo(Restaurant, {as: 'owner'});
Menu.belongsToMany(Dish, {through: 'menu_dish'});
Dish.belongsToMany(Menu, {through: 'menu_dish'});
User.belongsToMany(Dish, {through: 'user_dish'})
Dish.belongsToMany(User, {through: 'user_dish'})

module.exports = {
	db,
	Restaurant,
	User,
  Dish
};
