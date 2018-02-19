const router = require('express').Router();
const HttpError = require('../utils/HttpError');
const { Restaurant } = require('../db/models');


router.post('/', (req, res, next) => {
  var array = [];
  req.body.forEach(rest => {
    var info = {
      name: rest.restaurant.name,
      address: rest.restaurant.location.address,
      latitude: rest.restaurant.location.latitude,
      longitude: rest.restaurant.location.longitude,
      price_range: rest.restaurant.price_range,
      zomato_id: rest.restaurant.id,
      url: rest.restaurant.url,
      featured_image: rest.restaurant.featured_image,
      user_rating: rest.restaurant.user_rating.aggregate_rating,
      votes: rest.restaurant.user_rating.votes,
      phone_numbers: rest.restaurant.phone_numbers
    }
    Restaurant.findOrCreate({
    where: {zomato_id: rest.restaurant.id},
    defaults: info
  }).spread((result, bool) => {
    array.push(result)
    return array
  })
})
Promise.all(array).then(restaurants => console.log(restaurants))
    .catch(next);
});
// ({
//     where: { googleId: profile.id }, // find this user
//     defaults: info // if we don't find them, then create with this information
//   })
//   .spread((user, createdBool) => {
//     done(null, user);
//   })
//   .catch(done);
// res.status(201).json(restaurants

module.exports = router;
