const jwt = require('jsonwebtoken');
const { key, rejected, isProduction } = require('../lib/const');

module.exports = function authorize(req, res, next) {
  const { cookies: { ["__Host-authentication"]: auth, authentication: authDev } } = req;
  const authentication = isProduction ? auth : authDev;

  if (!authentication || !authentication.startsWith('Bearer ')) {
    next(rejected);
    return;
  }

  const token = authentication.replace('Bearer ', '');
  try {
    req.user = jwt.verify(token, key);
  } catch (e) {
    next(rejected);
    return;
  }

  next();
};
