
const router = require('express').Router();
const HttpError = require('../utils/HttpError');
const { Order, Favorites, User } = require('../db/models');
const Promise = require('bluebird')


router.get('/:id/orders', (req, res, next)=> {
  const id = req.params.id
  Order.findAll({ where: {user_id: id}, group: "createdAt"})
  .then(result => {
    console.log(result)
    res.status(201).json(result)})
})

router.post('/:id/orders', async(req, res, next) => {
  User.update({orders: sequelize.literal('order + 1')}, {where: {user_id: req.body.terms.currentUser.id}, returning: true, plain: true})
  .then(user => {
    const orderNum = user.orders 
    const {dishes, currentUser, cartRestaurant} = req.body.terms
    return Promise.each(dishes, (ele)=> {
      Order.create({user_id: currentUser.id, dish_id: ele.dish.id, restaurant_id: cartRestaurant.id, 
        quantity: ele.quantity, status: "ordered", orderNum: orderNum })
    })
  })
    
    
  .then(result => res.status(201).json(result))
});

router.get('/:id/favorites', (req, res, next)=> {
  const id = req.params.id
  Favorites.findAll({ where: {user_id: id}})
  .then(result => res.status(201).json(result))
})

router.post('/:id/favorites', (req, res, next) => {
  const {dish, currentUser, restaurant} = req.body.terms
  Favorites.create({user_id: currentUser.id, dish_id: dish.id, restaurant_id: restaurant.id })
  .then(result => res.status(201).json(result))
  .catch(function (err) {
    console.log(err)
  })
});



module.exports = router;
