//work on this
const db = require('../_db');
const Dish = require('./dish');
const Restaurant = require('./restaurant');
const User = require('./user');
const Menu = require('./menu');
const Order = require('./order')
const Favorites = require('./favorites')

Restaurant.hasOne(Menu, {
  foreignKey: 'owner_id',
  onDelete: 'cascade',
  hooks: true
});


Menu.belongsTo(Restaurant, {
  as: 'owner'
});
Menu.belongsToMany(Dish, {
  through: 'menu_dish'
});
Dish.belongsToMany(Menu, {
  through: 'menu_dish'
});
User.belongsTo(Dish, {
  through: {
    model: Order,
    unique: false
  },
  constraints: false
}, )
Dish.belongsToMany(User, {
  through: {
    model: Order,
    unique: false
  },
  constraints: false
})
User.belongsToMany(Dish, {
  through: Favorites
})
Dish.belongsToMany(User, {
  through: Favorites
})

module.exports = {
  db,
  Restaurant,
  User,
  Dish,
  Menu,
  Order,
  Favorites
};