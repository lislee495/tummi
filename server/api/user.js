const router = require('express').Router();
const HttpError = require('../utils/HttpError');
const config = require('../config')
const axios = require('axios')
const {
  Order,
  Favorites,
  User
} = require('../db/models');
const Promise = require('bluebird')
const sequelize = require('sequelize')


router.get('/:id/orders', (req, res, next) => {
  const id = req.params.id
  Order.findAll({
      where: {
        user_id: id
      }
    })
    .then(result => {
      res.status(201).json(result)
    })
})

router.post('/:id/orders', async (req, res, next) => {
  User.findById(req.params.id)
    .then(user => {
      return user.increment('orders')
    })
    .then(userIncremented => {
      const orderNum = userIncremented.orders
      if (req.body.terms.cart) {
        const {
          cart,
          currentUser
        } = req.body.terms
        return Promise.each(cart.dishes, (ele) => {
          Order.create({
            user_id: currentUser.id,
            dish_id: ele.dish.id,
            restaurant_id: cart.restaurant.id,
            quantity: ele.quantity,
            status: "ordered",
            orderNum: orderNum,
            total: cart.total
          })
        })
      } else {
        return Promise.each(req.body.terms.order, (ele) => {
          Order.create({
            orderNum: orderNum,
            user_id: ele.user_id,
            dish_id: ele.dish_id,
            restaurant_id: ele.restaurant_id,
            quantity: ele.quantity,
            status: "ordered",
            total: ele.total
          }).catch(err => console.log(err))
        })
      }
    })
    .then(result => res.status(201).json(result))

});

router.get('/:id/favorites', (req, res, next) => {
  const id = req.params.id
  Favorites.findAll({
      where: {
        user_id: id
      }
    })
    .then(result => res.status(201).json(result))
})

router.post('/:id/favorites', (req, res, next) => {
  const {
    dish,
    currentUser,
    restaurant
  } = req.body.terms
  Favorites.create({
      user_id: currentUser.id,
      dish_id: dish.id,
      restaurant_id: restaurant.id
    })
    .then(result => res.status(201).json(result))
    .catch(function (err) {
      console.log(err)
    })
});



module.exports = router;