const router = require('express').Router();
const {
  Dish
} = require('../db/models');
const titleize = require('titleize');

router.post('/', (req, res, next) => {
  const categoryArray = ["spicy", "gluten-free", "vegan", "dairy-free", "vegetarian", "nut-free"]
  let random = Math.floor(Math.random() * (categoryArray.length + 3))
  const info = {
    name: titleize(req.body.dish.title),
    price: (Math.random() * (5.00 - 17.00) + 17.00).toFixed(2),
    category: (random < categoryArray.length) ? [req.body.category, categoryArray[random]] : [req.body.category]
  }
  Dish.findOrCreate({
      where: {
        name: titleize(req.body.dish.title)
      },
      defaults: info
    }).spread((result, bool) => res.status(201).json(result))
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id
  Dish.findById(id)
    .then(dish => res.status(201).json(dish))
})


module.exports = router;