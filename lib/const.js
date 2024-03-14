const { celebrate, Joi } = require('celebrate');
const AuthError = require('./error/AuthError');
const Forbidden = require('./error/Forbidden');

const { JWT_SECRET, NODE_ENV } = process.env;

exports.key = NODE_ENV === 'production' ? JWT_SECRET : 'chanchito';

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
  }),
});

exports.allowedOrigins = [
  'https://localhost:3000',
  'http://localhost:3000',
];
