const router = require('express').Router();

router.use('/restaurants', require('./restaurant'));

module.exports = router;
