import proxy from 'koa-proxies'
import serve from 'koa-static'
import mount from 'koa-mount'

const {
  WEBPACK_PORT,
} = process.env

export const webpackProxy = proxy('/dist', {
  target: `http://localhost:${WEBPACK_PORT}`,
})

export const dist = mount('/dist', serve('dist'))
