const Koa = require('koa')
const app = new Koa()  // 第一步:创建实例
const cors = require('koa-cors');
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const novel = require('./routes/novel')

// error handler
onerror(app)

app.use(cors());

app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))


// routes
app.use(novel.routes(), novel.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app


