const Koa = require('koa')
const app = new Koa()


app.use(async(ctx, next) => {
	ctx.body = '1'
	next()
	ctx.body += '2'
})
app.use(async(ctx, next) => {
	ctx.body += '3'
	next()
	ctx.body += '4'
})
app.use(async(ctx, next) => {
	ctx.body += '5'
	next()
	ctx.body += '6'
})

app.listen('8080')