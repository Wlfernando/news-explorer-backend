const express = require('express');
const mongoose = require('mongoose');
const cards = require('./route/cards');
const { createUser } = require('./handler/user');

const app = express();
const { PORT = 3001 } = process.env;

mongoose.connect('mongodb://127.0.0.1:27017/newsApi');

app.use('/signup', createUser);

app.use('/cards', cards);

app.listen(PORT);
