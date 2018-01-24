const router = require('koa-router')()

router.prefix('/userList')

let userListData = require('./../model/userList')

router.get('/', async (ctx, next) => {
  await ctx.render('userList', {
    title: '',
    user_list: userListData
  })
})

router.get('/getJson', async (ctx, next) => {
  ctx.body = userListData
})

module.exports = router