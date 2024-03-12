const mongoose = require('mongoose');
const { validateEmailPattern, findByCredencials } = require('../lib/utils');

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

userSchema.statics.findByCredencials = findByCredencials;

module.exports = mongoose.model('user', userSchema);
