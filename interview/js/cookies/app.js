const Koa = require('koa');
const app = new Koa();
// 启动中间件    一个函数服务于App 访问者
// node server 基本思路
app.use(async (ctx) => {
    // ctx 是request response 合集
    // ctx.body = 'hello world';
    if (ctx.url == '/index') {
        // 服务器端设置 客户端每次都会带上cookie向服务器发送请求 服务器会知道你是谁
        ctx.cookies.set('uid','123212342',{
            // 域名限制 安全
            domain: '127.0.0.1',
            maxAge: 1000*60*60*24,
            // path: '/index',
            // expires: new Date('2020-1-1')
            httpOnly: false
        })
        ctx.body = '/index';
    } else if(ctx.url == '/') {
        if (ctx.cookies.get('uid')) {
            ctx.body = ctx.cookies.get('uid')
        } else {
            ctx.type = 'text/html;charset=utf-8';
            ctx.body = 'Cookie is none';
        }
    }
})
app.listen(1234, () => {
  console.log('server is starting at port 1234');
})
