const { isEmail } = require('validator');

exports.validateEmailPattern = function validateEmailPattern() {
  return {
    validator(email) {
      return isEmail(email);
    },
    message: 'This is not a valid email.',
  };
};
