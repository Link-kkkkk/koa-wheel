const router = require('koa-router')()
const Monk = require('monk');
const db = new Monk('localhost:27017/blog')
const userModel = require('../model/userList') 

router.get('/', async (ctx, next) => {
  let data
  global.root = 'http://127.0.0.1:3000/img/'

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

router.all('/checkName', async (ctx, next) => {
  if(ctx.query.username){
    try{
      await db.get('users').find({ name: ctx.query.username }).then( (res) => {
        if(res == ''){
          // 划重点，会重复请求，必须要return render函数
          return ctx.render('info', {
            type: 'none',
            title: '用户不存在',
          })
        }else{
          var resData = res[0]
          return ctx.render('info', {
            type: 'clear',
            title: 'title',
            modelData: resData.name,
            password:resData.password,
            gender:resData.gender,
            bio:resData.bio,
            avatar:'http://127.0.0.1:3000/img/' + resData.avatar,
            create_date:resData.create_date
          })
        }
      })
    } catch(error) {
      console.log(error)
    }
  }
  // return ctx.redirect('back')
})

module.exports = router
