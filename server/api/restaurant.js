const router = require('express').Router();
const {
  Restaurant,
  Dish,
  Menu,
} = require('../db/models');
const axios = require('axios')
const config = require('../config')
const Promise = require('bluebird')
const sequelize = require('sequelize')

router.get('/:id', (req, res, next) => {
  Restaurant.findById(req.params.id)
    .then((result) => {
      res.json(result)
    })
    .catch(next)
})

router.get('/:id/menu', (req, res, next) => {
  const id = req.params.id;
  Menu.findOrCreate({
      where: {
        owner_id: id
      }
    }).spread(async (menu, bool) => {
      if (bool) {
        const restaurant = await (Restaurant.findById(id))
        const dishes = await (Dish.findAll({
          where: {
            category: {
              $contains: [restaurant.category[0]]
            }
          },
          order: [
            sequelize.fn('RANDOM'),
          ],
          limit: 10
        }))
        const newMenu = await (menu.addDishes(dishes))
        return menu
      } else {
        return menu
      }
    })
    .then(menu => menu.getDishes())
    .then(dishes => res.status(201).json(dishes))
    .catch(next)
})

router.post('/yelp', (req, res, next) => {
  const {
    category,
    location
  } = req.body
  const newLoc = location.split(' ').join('+')
  axios.get(`https://api.yelp.com/v3/businesses/search?term=food+${category}&location=${newLoc}`, {
      headers: {
        "Authorization": "Bearer " + config.YELP_API_KEY
      }
    })
    .then(result => res.status(201).json(result.data.businesses))
    .catch(function (error) {
      if (error.response.status === 400) res.status(error.response.status)
    })
})

router.post('/', (req, res, next) => {
  const {
    businesses,
    category
  } = req.body
  return Promise.map(businesses, (restaurant) => {
      const info = {
        name: restaurant.name,
        category: [category.toLowerCase(), restaurant.categories[0].title],
        yelp_url: restaurant.id,
        address: `${restaurant.location.address1}, ${restaurant.location.city}, ${restaurant.location.state} ${restaurant.location.zip_code}`,
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
        where: {
          yelp_url: restaurant.id
        },
        defaults: info
      }).spread((result, bool) => result)
    })
    .then(result => res.status(201).json(result))
    .catch(next)
})

module.exports = router;