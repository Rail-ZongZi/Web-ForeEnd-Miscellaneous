const Koa = require('koa');
const prot = 3000;
const app = new Koa()

const router = require('./router.js')

// app.use(async ctx => {
//   ctx.body = '你好koa';
// })


app.use(router.routes())
app.use(router.allowedMethods());

app.listen(prot, () => console.log(`成功启动，且端口为${prot}...`));
