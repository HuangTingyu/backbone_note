const router = require('koa-router')()


router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/modelGet', async (ctx, next) => {
  const query = ctx.query
  ctx.body = {
    title: 'koa2 modelGet',
    query: query,
  }
})

router.post('/modelPost', async (ctx, next) => {
  const body = ctx.request.body
  ctx.body = {
    title: 'koa2 modelPost',
    body: body,
  }
})

module.exports = router
