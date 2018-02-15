const router = require('express').Router();
const HttpError = require('../utils/HttpError');
const { User } = require('../db/models');

router.put('/login', (req, res, next) => {
  const { email, password } = req.body
  User.findOne({
    where: { email, password }
  })
  .then(user => {
    if (!user) throw HttpError(404);
    req.login(user, err => {
      if (err) { return next(err); }
      res.send(user); // 200 is the default status!
    });
  })
  .catch(next);
});

router.post('/signup', (req, res, next) => {
  const { email, password } = req.body
  User.create({
    email,
    password
  })
  .then(user => {
    req.login(user, err => {
      if (err) { return next(err); }
      res.status(201).send(user);
    })
  })
  .catch(next);
});

router.delete('/logout', (req, res, next) => {
  req.logout();
  res.sendStatus(204);
});

router.get('/', (req, res, next) => {
  res.send(req.user);
})
module.exports = router;
