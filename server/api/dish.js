const router = require('express').Router();
const HttpError = require('../utils/HttpError');
const { Dish } = require('../db/models');

router.post('/', (req, res, next) => {
  const categoryArray = ["spicy", "gluten-free", "vegan", "dairy-free", "vegetarian", "nut-free"]
  let random = Math.floor(Math.random()*(categoryArray.length + 3))
  console.log(req.body)
  const info = {
    name: req.body.dish.title,
    price: (Math.random() * (5.00 - 17.00) + 17.00).toFixed(2),
    category: (random < categoryArray.length) ? [req.body.category, categoryArray[random]] : [req.body.category]
  }
  Dish.findOrCreate({
  where: {name: req.body.dish.title},
  defaults: info
}).spread((result, bool) =>  res.status(201).json(result))
  .catch(next);
});


module.exports = router;
