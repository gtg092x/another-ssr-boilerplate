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
  // if you're asking for json data you're in the wrong place
  if (!ctx.accepts('html')) {
    return next()
  }

  // Redux state, if you set auth to a cookie you can inject it here
  const initialState = {}

  const services = {}

  // react router history, memory
  services.history = createHistory({
    initialEntries: [ctx.url],
  })


  // our axios client, we'll loopback to localhost on the server
  const baseURL = `http://localhost:${PORT}/`
  services.client = configureClient({ baseURL }, () => services)

  // our redux store
  services.store = configureStore(initialState, services)

  // not strictly necessary, but we should send be able to send 404s
  // if we get to a weird page in the app
  services.setStatus = (status) => {
    ctx.status = status
  }

  // here's the awesome data loader - location was already set when we initialized
  // history in the services object above

  // on the browser we'll pass in the last location so we can
  // check to see if page changes warrant fresh data
  await services.store.dispatch(loadDataForLocation())

  const app = ReactDom.renderToString(<App {...services} />)

  // This is our server-only template that includes Title, etc
  const html = ReactDom.renderToStaticMarkup(
    <Html store={services.store} app={app} />,
  )

  ctx.body = `<!DOCTYPE html>${html}`
}

export default render
