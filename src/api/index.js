import Router from 'koa-router'
import compose from 'koa-compose'
import mount from 'koa-mount'

const router = new Router()

router.get('/home', (ctx) => {
  ctx.body = {
    content: 'This is our home content. It was loaded from the server. Check src/api/index.js',
  }
})

router.get('/about', async (ctx) => {
  await new Promise(resolve => setTimeout(resolve, 500))
  ctx.body = {
    content: 'This is our about section. It took 500 milliseconds to load.',
  }
})

const middleware = compose([
  router.allowedMethods(),
  router.routes(),
])

// this would make all routes have `/api` in front of them (e.g. /api/home)
export default mount('/api', middleware)
