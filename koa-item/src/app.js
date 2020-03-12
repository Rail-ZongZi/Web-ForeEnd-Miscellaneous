const Koa = require('koa');

const app = new Koa()

const prot = 3000;

app.use(async ctx => {
  ctx.body = '你好koa';
})

app.listen(prot, () => console.log(`成功启动，且端口为${prot}...`));
