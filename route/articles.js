const articlesRouter = require('express').Router();
const { createArticle, getArticles, deleteArticle } = require('../handler/article');

articlesRouter.post('', createArticle);

articlesRouter.get('', getArticles);

articlesRouter.delete('/:articleId', deleteArticle);

module.exports = articlesRouter;
