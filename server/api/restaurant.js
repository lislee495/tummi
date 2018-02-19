const router = require('express').Router();
const HttpError = require('../utils/HttpError');
const { Restaurant } = require('../db/models');


router.post('/', (req, res, next) => {
  Promise.all(req.body.map(restaurant => {
    Restaurant.findOrCreate(restaurant.restaurant)
  })).then(restaurants => res.status(201).json(restaurants))
    .catch(next);
});

module.exports = router;
