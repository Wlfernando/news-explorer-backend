const mongoose = require('mongoose');

const config = {
  type: String,
  required: true,
}

const articleSchema = new mongoose.Schema({
  keyWord: config,
  title: config,
  text: config,
  date: config,
  urlToImage: config,
  url: config,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
});

module.exports = mongoose.model('article', articleSchema);
