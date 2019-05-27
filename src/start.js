import Koa from 'koa'
import api from './api'
import {
  dist,
  webpackProxy,
} from './middleware'
import render from './render'

const {
  WEBPACK_PORT,
  PORT = 3000,
} = process.env

const app = new Koa()

if (WEBPACK_PORT !== undefined) {
  console.log('leveraging webpack dev proxy to serve files!')
  app.use(webpackProxy)
} else {
  app.use(dist)
}

app.use(api)
app.use(render)

app.listen(PORT)
