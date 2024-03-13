const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../model/user');
const { key } = require('../lib/const');
const CastError = require('../lib/error/CastError');

function hasNotFoundUser() {
  throw new CastError('User not found.');
}

exports.createUser = function createUser(req, res, next) {
  const { password, email, name } = req.body;

  bcrypt.hash(password, 10)
    .then((hash) => User.create({ name, email, password: hash }))
    .then(() => res.sendStatus(201))
    .catch(next);
};

exports.signIn = function signIn(req, res, next) {
  const { password, email } = req.body;

  User.findByCredencials({ password, email })
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, key, { expiresIn: '7d' });

      res.send({ token });
    })
    .catch(next);
};

exports.getMe = function getMe(req, res, next) {
  User.findById(req.user._id)
    .then((user) => res.send(user), hasNotFoundUser)
    .catch(next);
};
