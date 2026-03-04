const { newsAPIkey } = require("../lib/const");
const AuthError = require("../lib/error/AuthError");
const { BadRequest } = require("../lib/error/BadReq");
const { TooManyRequest } = require("../lib/error/TooManyRequest");

exports.getNews = function getNews(req, res, next) {
  const {
    q,
    from,
    to,
    page,
  } = req.query;

  fetch(`https://newsapi.org/v2/everything?q=${q}&from=${from}&to=${to}&pageSize=3&language=es&page=${page}`, {
    headers: {
      'Authorization': newsAPIkey,
    },
  })
  .then((res) => {
    if(res.ok)
      return res.json();

    return Promise.reject(res.status);
  })
  .then(apiRes => {
    res.send(apiRes);
  }, (status) => {
    switch(status) {
      case 400:
        throw new BadRequest('Intenta otra palabra clave.');
      case 401:
        throw new AuthError('Credenciales de la app incorrectas.');
      case 429:
        throw new TooManyRequest('Demaciadas peticiones para manejar.');
      default:
        throw new Error();
    }
  })
  .catch(next)
}