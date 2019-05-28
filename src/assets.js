import proxy from 'koa-proxies'
import serve from 'koa-static'
import mount from 'koa-mount'

const {
  WEBPACK_PORT,
} = process.env

// webpack dev server proxy
// only used if WEBPACK_PORT is defined
export const webpackProxy = WEBPACK_PORT ? proxy('/dist', {
  target: `http://localhost:${WEBPACK_PORT}`,
}) : null

// static assets from your /dist folder
export const dist = mount('/dist', serve('dist'))
