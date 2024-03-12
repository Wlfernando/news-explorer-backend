const express = require('express');
const mongoose = require('mongoose');
const cards = require('./route/cards');
const { createUser, signIn, getMe } = require('./handler/user');
const hasError = require('./middleware/hasError');
const authorize = require('./middleware/authorize');

const app = express();
const { PORT = 3001 } = process.env;

mongoose.connect('mongodb://127.0.0.1:27017/newsApi');

app.use(express.json());

app.post('/signup', createUser);

app.post('/signin', signIn);

app.use(authorize);

app.use('/users/me', getMe);

app.use('/cards', cards);

app.use(hasError);

app.listen(PORT);
