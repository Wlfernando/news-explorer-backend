const { celebrate, Joi } = require('celebrate');
const AuthError = require('./error/AuthError');
const Forbidden = require('./error/Forbidden');

const { JWT_SECRET, NODE_ENV, MONGO_URI, NEWS_API_KEY, ALLOWED_ORIGINS } = process.env;

const isProduction = NODE_ENV === 'production';

exports.sameSite = isProduction ? 'None' : 'Strict';

exports.isProduction = isProduction;

exports.prependedHostCookieName = isProduction ? '__Host-' : '';

exports.key = isProduction ? JWT_SECRET : 'chanchito';

exports.newsAPIkey = NEWS_API_KEY ?? 'Throw credential error';

exports.mongoURI = MONGO_URI ?? 'mongodb://127.0.0.1:27017/newsApi';

exports.credencialError = new AuthError('Incorrect password or email.');

exports.rejected = new Forbidden('Authorization needed.');

const requiredString = Joi.string().required();

const credentials = {
  email: requiredString.email(),
  password: requiredString.min(4),
};

exports.signupValidator = celebrate({
  body: Joi.object().keys({
    ...credentials,
    name: requiredString.min(2).max(30),
  }),
});

exports.signinValidator = celebrate({
  body: Joi.object().keys(credentials),
});

const uriValidator = requiredString.uri();

exports.articleValidator = celebrate({
  body: Joi.object().keys({
    keyWord: requiredString,
    title: requiredString,
    text: requiredString,
    date: requiredString.isoDate(),
    urlToImage: uriValidator,
    url: uriValidator,
    source: requiredString,
  }),
});

exports.allowedOrigins = isProduction ?
  ALLOWED_ORIGINS.split(',') :
  [
    'https://localhost:3000',
    'http://localhost:3000',
  ];
