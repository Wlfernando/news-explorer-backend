const Article = require('../model/article');

exports.createArticle = function createArticle(req, res, next) {
  const {
    keyWord,
    title,
    text,
    date,
    urlToImage,
    url,
  } = req.body;

  Article.create({
    keyWord,
    title,
    text,
    date,
    urlToImage,
    url,
    owner: req.user._id,
  })
    .then(() => res.send())
    .catch(next);
};
