const router = require('koa-router')()

// router.prefix('/users')
var data = [
  {
      code: 6058496,
      name:"高雯",
      drama:"克拉恋人",
      score:80
  },
  {
      code: 6857276,
      name:"唐楠楠",
      drama:"傲娇与偏见",
      score:70
  },
  {            
      code: 6488862,
      name:"凤九",
      drama:"十里桃花",
      score:90
  },{
      code: 11743112,
      name:"周放",
      drama:"爱情高级定制",
      score:80
  },
]
router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.get('/collectionGet', async (ctx, next) => {
  const query = ctx.query
  ctx.body = data
})

router.post('/collectionPost', async (ctx, next) => {
  const body = ctx.request.body
  ctx.body = {
    title: 'koa2 modelPost',
    body: body,
    code:"8932678"
  }
})

module.exports = router
