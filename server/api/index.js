const router = require('express').Router();

router.use('/restaurants', require('./restaurant'));
router.use('/dishes', require('./dish'))
router.use('/users', require('./user'))

module.exports = router;
