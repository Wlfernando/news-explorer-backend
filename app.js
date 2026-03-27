const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const cors = require('cors');
require('dotenv').config();
const { createUser, signIn } = require('./handler/user');
const hasError = require('./middleware/hasError');
const { signupValidator, signinValidator, allowedOrigins, mongoURI } = require('./lib/const');
const { requestLogger, errorLogger } = require('./middleware/logger');
const notFound = require('./middleware/notFound');
const authorizationRouter = require('./route/authorization');
const { getNews } = require('./handler/news');

const app = express();
const { PORT = 3001 } = process.env;

mongoose.connect(mongoURI);

app.use(express.json());

app.use(requestLogger);

app.post('/signup', cors({ origin: allowedOrigins }), signupValidator, createUser);

app.post('/signin', cors({ origin: allowedOrigins, credentials: true }), signinValidator, signIn);

app.get('/news', cors({ origin: allowedOrigins }), getNews)

app.use(authorizationRouter);

app.use('*', cors({ origin: allowedOrigins }), notFound);

app.use(errorLogger);

app.use(errors());

app.use(hasError);

app.listen(PORT);
