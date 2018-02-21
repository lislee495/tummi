const router = require('express').Router();
const HttpError = require('../utils/HttpError');
const { Dish } = require('../db/models');

router.post('/', (req, res, next) => {
  const categoryArray = ["spicy", "gluten-free", "vegan", "dairy-free", "vegetarian", "nut-free"]
  const info = {
    name: req.body.dish.title,
    price: Math.random() * (17.00 - 5.00) + 17.00,
    category: [...res.body.category, categoryArray[Math.floor(Math.random()*categoryArray.length)]]
  }
  Dish.findOrCreate({
  where: {name: req.body.dish.title},
  defaults: info
}).spread((result, bool) => {
  res.status(201).json(result)})
    .catch(next);
});


module.exports = router;
