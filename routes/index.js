const router = require('koa-router')()
const Monk = require('monk');
const db = new Monk('localhost:27017/blog')
const userModel = require('../model/userList') 

let mongodbBlog = db.get('users')

router.get('/', async (ctx, next) => {
  let data
  let root = 'http://127.0.0.1:3000/img/'
  await mongodbBlog.find({ name: 'luca' }).then( (res) => {
    data = res[0]
  })

  await ctx.render('index', {
    title: userModel.userIdData.title,
    modelData: data.name,
    password:data.password,
    gender:data.gender,
    bio:data.bio,
    avatar:root + data.avatar,
    create_date:data.create_date
  })
})

router.get('/string', async (ctx, next) => {
  await ctx.render('index', {
    title: 'string'
  })
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get('/lcoa', async (ctx , next) => {
  
})

module.exports = router
