const router = require('koa-router')()
const Monk = require('monk');
const db = new Monk('localhost:27017/blog')
const userModel = require('../model/userList') 

let mongodbBlog = db.get('users')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: userModel.userIdData.title
  })
  await mongodbBlog.find({}, function(err, docs) {
    console.log(docs)
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get('/lcoa', async (ctx , next) => {
  
})
module.exports = router
