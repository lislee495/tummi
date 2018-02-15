const router = require('express').Router();

router.use('/local', require('./local'));
router.use('/facebook', require('./facebook'));

module.exports = router;
