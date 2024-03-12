const articlesRouter = require('express').Router();
const { createArticle, getArticles } = require('../handler/article');

articlesRouter.post('', createArticle);

articlesRouter.get('', getArticles);

module.exports = articlesRouter;
