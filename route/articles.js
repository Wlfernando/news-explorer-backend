const articlesRouter = require('express').Router();
const { createArticle } = require('../handler/article');

articlesRouter.post('', createArticle);

module.exports = articlesRouter;
