const mongoose = require('mongoose');
const { validateEmailPattern } = require('../lib/utils');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: validateEmailPattern(),
  },
  password: {
    type: String,
    required: true,
    select: false,
    minlength: 4,
  },
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
});

exports = mongoose.model('user', userSchema);
