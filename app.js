const express = require('express');
const mongoose = require('mongoose');
const { createUser, signIn, getMe } = require('./handler/user');
const hasError = require('./middleware/hasError');
const authorize = require('./middleware/authorize');
const articlesRouter = require('./route/articles');
const { signupValidator, signinValidator } = require('./lib/const');
const { errors } = require('celebrate');

const app = express();
const { PORT = 3001 } = process.env;

mongoose.connect('mongodb://127.0.0.1:27017/newsApi');

app.use(express.json());

app.post('/signup', signupValidator, createUser);

app.post('/signin', signinValidator, signIn);

app.use(authorize);

app.get('/users/me', getMe);

app.use('/articles', articlesRouter);

app.use(errors())

app.use(hasError);

app.listen(PORT);
