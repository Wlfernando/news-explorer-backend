const AuthError = require('./error/AuthError');
const Forbidden = require('./error/Forbidden');

const { JWT_SECRET, NODE_ENV } = process.env;

exports.credencialError = new AuthError('Incorrect password or email.');

exports.rejected = new Forbidden('Authorization needed.');

exports.key = NODE_ENV === 'production' ? JWT_SECRET : 'chanchito';
