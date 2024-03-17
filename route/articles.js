const articlesRouter = require('express').Router();
const { createArticle, getArticles, deleteArticle } = require('../handler/article');
const { articleValidator } = require('../lib/const');

articlesRouter.post('', articleValidator, createArticle);

articlesRouter.get('', getArticles);

articlesRouter.delete('/:articleId', deleteArticle);

module.exports = articlesRouter;
