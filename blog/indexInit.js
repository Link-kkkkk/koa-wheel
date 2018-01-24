const Koa = require('koa');
const app = new Koa();

// app.use(async ctx => {
//   ctx.body = 'Hello World';
// });

app.use(function (req, res, next) {
  req.body = 'Hello World';
})

module.exports = app