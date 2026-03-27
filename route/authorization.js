const authorizationRouter = require('express').Router();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authorize = require('../middleware/authorize');
const { allowedOrigins } = require('../lib/const');
const articlesRouter = require('./articles');
const { getMe, signOut } = require('../handler/user');

authorizationRouter.use(cors({ origin: allowedOrigins, credentials: true }), cookieParser(), authorize);

authorizationRouter.get('/users/me', getMe);

authorizationRouter.use('/articles', articlesRouter);

authorizationRouter.delete('/signin', signOut);

module.exports = authorizationRouter;
