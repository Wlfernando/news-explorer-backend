const AuthError = require('./error/AuthError');

exports.credencialError = new AuthError('Incorrect password or email.');
