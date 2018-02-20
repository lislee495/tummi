const router = require('express').Router();
const HttpError = require('../utils/HttpError');
const { Restaurant } = require('../db/models');


router.post('/', (req, res, next) => {

  const info = {
    name: req.body.restaurant.name,
    address: req.body.restaurant.location.address,
    latitude: req.body.restaurant.location.latitude,
    longitude: req.body.restaurant.location.longitude,
    price_range: req.body.restaurant.price_range,
    zomato_id: req.body.restaurant.id,
    url: req.body.restaurant.url,
    featured_image: req.body.restaurant.featured_image,
    user_rating: req.body.restaurant.user_rating.aggregate_rating,
    votes: req.body.restaurant.user_rating.votes,
    phone_numbers: req.body.restaurant.phone_numbers
  }
  Restaurant.findOrCreate({
  where: {zomato_id: req.body.restaurant.id},
  defaults: info
}).spread((result, bool) => {
  res.status(201).json(result)})
    .catch(next);
});


module.exports = router;
