const home = require('./home')
const users = require('./users')
const getList = require('./getList')

module.exports = function (app) {
  app.use(home.routes())
  app.use(users.routes(), users.allowedMethods())
  app.use(getList.routes(), getList.allowedMethods())
}