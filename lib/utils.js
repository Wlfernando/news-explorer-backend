const { isEmail } = require('validator');
const bcrypt = require('bcrypt');
const { credencialError } = require('./const');

exports.validateEmailPattern = function validateEmailPattern() {
  return {
    validator(email) {
      return isEmail(email);
    },
    message: 'This is not a valid email.',
  };
};

exports.findByCredencials = function findByCredencials({ email, password }) {
  return this.findOne({ email })
    .select('+password')
    .then(async (theUser) => {
      if (!theUser) {
        throw credencialError;
      }

      if (!await bcrypt.compare(password, theUser.password)) {
        throw credencialError;
      }

      return theUser;
    });
};
