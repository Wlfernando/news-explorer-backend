const bcrypt = require('bcrypt');
const User = require('../model/user');

exports.createUser = function createUser(req, res, next) {
  const { password, email, name } = req.body;

  bcrypt.hash(password, 10)
    .then((hash) => User.create({ name, email, password: hash }))
    .then((user) => res.send(user))
    .catch(next);
};

exports.signIn = function signIn(req, res, next) {
  const { password, email } = req.body;

  User.findByCredencials({ password, email })
    .then((user) => {
      res.send(user);
    });
};
