const router = require('koa-router')()
const Monk = require('monk');
const db = new Monk('localhost:27017/blog')
const userModel = require('../model/userList') 

router.get('/', async (ctx, next) => {
  let data
  let root = 'http://127.0.0.1:3000/img/'

  try{
    await db.get('users').find({ name: 'luca' }).then( (res) => {
      data = res[0]
    })

    if(db._state == 'open'){
      await ctx.render('index', {
        title: userModel.userIdData.title,
        modelData: data.name,
        password:data.password,
        gender:data.gender,
        bio:data.bio,
        avatar:root + data.avatar,
        create_date:data.create_date
      })
    }else{
      await ctx.render('index', {
        title: 'connect false',
      })
    }
  } catch (error){
    console.log(error)
  }
})

router.get('/sendName', async (ctx, next) => {
  console.log(123);
})

router.post('/sendName', async (ctx, next) => {
  console.log(123);
})

module.exports = router
