const router = require('express').Router();
const HttpError = require('../utils/HttpError');
const { User } = require('../db/models');

router.post('/:id/orders', (req, res, next) => {
  User.findById(req.params.id)
  .then(user => user.setDishes(req.body.cart.map(ele => ele.id), {"status": "ordered"}))
  .then(result => {
    console.log(result)
    res.status(201).json(result)})
});


module.exports = router;
