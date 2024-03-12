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

exports.getArticles = function getArticles(req, res, next) {
  Article.find({owner: req.user._id})
    .sort({createdAt: -1})
    .then((articles) => res.send(articles))
    .catch(next)
};

exports.deleteArticle = function deleteArticle(req, res, next) {
  Article.findByIdAndDelete(req.params.articleId)
    .then(() => res.send())
    .catch(next);
};
