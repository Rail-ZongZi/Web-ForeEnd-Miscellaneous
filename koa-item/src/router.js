const Router = require('koa-router');
const router = new Router();

const Home = router.get('/', (ctx, next) => {
  ctx.body = '首页页面';
})

const User = router.get('/user/:id', (ctx, next) => {
  ctx.body = `新闻页面${ctx.params.id}`;
})

const Color = router.get('/color', (ctx, next) => {
  ctx.body = '颜色页面'
})

module.exports = Home
module.exports = User
module.exports = Color
