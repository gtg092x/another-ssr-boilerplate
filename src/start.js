import Koa from 'koa'
import api from './api'
import {
  dist,
  webpackProxy,
} from './assets'
import render from './render'

// these are set in .env
// when you install app dependencies, we copied
// .env.template to .env
const {
  WEBPACK_PORT,
  PORT = 3000,
} = process.env

const app = new Koa()

// If we're in dev mode, let's load our scripts
// straight from webpack
if (WEBPACK_PORT !== undefined) {
  console.log('Leveraging webpack dev proxy to serve files.')
  app.use(webpackProxy)
} else {
  app.use(dist)
}

// Api data routes
app.use(api)

// React app rendered
app.use(render)

app.listen(PORT, () => {
  console.log(`Listening to your awesome SSR app on port ${PORT}.`)
})
