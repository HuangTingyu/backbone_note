const router = require('koa-router')()

// router.prefix('/users')
var data = [
  {
      name:"高雯",
      drama:"克拉恋人",
      score:80
  },
  {
      name:"唐楠楠",
      drama:"傲娇与偏见",
      score:70
  },
  {
      name:"凤九",
      drama:"十里桃花",
      score:90
  },{
      name:"周放",
      drama:"爱情高级定制",
      score:88
  }
]
router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.get('/collectionGet', async (ctx, next) => {
  const query = ctx.query
  ctx.body = {
    title: 'koa2 collectionGet',
    query: query,
    data: data
  }
})

module.exports = router
