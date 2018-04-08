const router = require('koa-router')()
const Monk = require('monk');
const db = new Monk('localhost:27017/blog')

router.prefix('/search')

router.get('/', async (ctx, next) => {
  let data

  try{
    await ctx.render('search', {
      title: 'koa',
    })
  } catch (error){
    console.log(error)
  }
})

router.all('/searchName', async(ctx, next) => {
  console.log(1);
  ctx.body = ctx.query.username
})
module.exports = router
