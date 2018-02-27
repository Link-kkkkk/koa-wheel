const router = require('koa-router')()
const qs = require('qs');
// const querystring = require('querystring');  
// const koaBody = require('koa-body');

router.prefix('/userList')

let userListData = require('./../model/userList')

router.get('/', async (ctx, next) => {
  await ctx.render('userList', {
    title: '',
    user_list: userListData
  })
})

router.get('/getJson', async (ctx, next) => {
  if(!ctx.querystring.length){
    ctx.body = {
      code: '401',
      data: {},
      msg: '缺少参数'
    }
    return
  }

  // ctx.body = userListData
  // get请求参数带在query
  let data = {
    data1:ctx.query,
    data2:userListData
  }
  ctx.body = data
  // post请求参数带在请求body里，需要中间件实现获取
  // ctx.body = ctx.request.body
})

router.get('*',async(ctx, next) => {
  ctx.body = {
    code: '401',
    data: {},
    msg: '缺少参数'
  }
})

module.exports = router