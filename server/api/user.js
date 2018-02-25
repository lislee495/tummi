const router = require('express').Router();
const HttpError = require('../utils/HttpError');
const { User } = require('../db/models');

router.post('/:id/orders', (req, res, next) => {
  User.findById(req.params.id)
  .then(user => user.addDishes(cart, { status: 'ordered' }))
  .then(result => res.status(201).json(result))
});


module.exports = router;
