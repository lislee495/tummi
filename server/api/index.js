const router = require('express').Router();

router.use('/restaurants', require('./restaurant'));
router.use('/dishes', require('./dish'))

module.exports = router;
