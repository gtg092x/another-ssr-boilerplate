import React from 'react'
import ReactDom from 'react-dom/server'
import { createMemoryHistory as createHistory } from 'history'
import App from '../app/App'
import configureStore from '../app/services/store'
import configureClient from '../app/services/client'
import Html from './Html'
import { loadDataForLocation } from '../app/Routes'

const {
  PORT,
} = process.env

const render = async (ctx, next) => {
  if (!ctx.accepts('html')) {
    return next()
  }

  const initialState = {}

  const services = {}
  services.history = createHistory({
    initialEntries: [ctx.url],
  })
  const baseURL = `http://localhost:${PORT}/`
  services.client = configureClient({ baseURL }, () => services)
  services.store = configureStore(initialState, services)

  await services.store.dispatch(loadDataForLocation())

  const app = ReactDom.renderToString(<App {...services} />)

  const html = ReactDom.renderToStaticMarkup(
    <Html store={services.store} app={app} />,
  )

  ctx.body = `<!DOCTYPE html>${html}`
  return next()
}

export default render
