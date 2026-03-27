const CastError = require('../lib/error/CastError');

module.exports = function notFound(req, res, next) {
  next(new CastError('Content not found.'))
}