const router = require('express').Router();
const HttpError = require('../utils/HttpError');
const { Order, User } = require('../db/models');
const Promise = require('bluebird')


router.post('/:id/orders', async(req, res, next) => {
  // let user = await(User.findById(req.params.id))
  const {cart, currentUser, cartRestaurant} = req.body.terms
  Promise.each(cart, (dish)=> {
    Order.create({user_id: currentUser.id, dish_id: dish.id, restaurant_id: cartRestaurant.id,
      status: "ordered" })
  })
  .then(result => res.status(201).json(result))
});


module.exports = router;
// User.findById(req.params.id)
// .then(user => user.addDishes(req.body.cart.map(ele => ele.id), {restaurant_id: 1, status: 'ordered'}))
