const router = require('express').Router();
const HttpError = require('../utils/HttpError');
const { Restaurant, Dish } = require('../db/models');
const axios = require('axios')
const config = require('../config')
const Promise = require('bluebird')

router.get('/:id', (req, res, next)=>{
  Restaurant.findById(req.params.id)
  .then(result => {
    res.json(result)})
  .catch(next)
})

router.post('/', (req, res, next)=> {
  const {category, location} = req.body
  axios.get(`https://api.yelp.com/v3/businesses/search?term=food+${category}&location=${location}`, {
    headers: {"Authorization": "Bearer " + config.YELP_API_KEY}
  })
  .then(result => {

    return Promise.map(result.data.businesses, (restaurant) => {
      const info = {
        name: restaurant.name,
        category: restaurant.categories.title,
        yelp_url: restaurant.id,
        address: `${restaurant.location.address1}, ${restaurant.location.city}, ${restaurant.location.state} ${restaurant.location.zip_code}` ,
        latitude: restaurant.coordinates.latitude,
        longitude: restaurant.coordinates.longitude,
        price_range: restaurant.price,
        url: restaurant.url,
        featured_image: restaurant.image_url,
        user_rating: restaurant.rating,
        votes: restaurant.review_count,
        phone_numbers: restaurant.display_phone,
        transactions: restaurant.transactions
      }
      return Restaurant.findOrCreate({
      where: {yelp_url: restaurant.id},
      defaults: info
    }).spread((result, bool) => result)
    })
  })
  .then(result => res.status(201).json(result))
  .catch(next)
})

//
// router.post('/make_restaurants', (req, res, next) => {
//   const info = {
//     name: restaurant.name,
//     category: restaurant.categories.alias,
//     yelp_id: restaurant.id,
//     address: `${restaurant.location.address1}, ${restaurant.location.city}, ${restaurant.location.state} ${restaurant.location.zip_code}` ,
//     latitude: restaurant.coordinates.latitude,
//     longitude: restaurant.coordinates.longitude,
//     price_range: restaurant.price,
//     url: restaurant.url,
//     featured_image: restaurant.image_url,
//     user_rating: restaurant.restaurant.rating,
//     votes: restaurant.review_count,
//     phone_numbers: restaurant.display_phone,
//     transactions: restaurant.transactions
//   }
//   Restaurant.findOrCreate({
//   where: {id: restaurant.id},
//   defaults: info
// }).spread((result, bool) => {
//   res.status(201).json(result)})
//     .catch(next);
// });
// router.get('/:id/menu', (req, res, next) => {
//   let restaurantId = req.param.id;
//   Dish.findAll({where: {restaurantId}})
//   .then(menu => res.status(201).json(menu))
//   .catch(next)
// })
//

module.exports = router;
