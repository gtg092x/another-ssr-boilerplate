import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory as createHistory } from 'history'
import App from './App'
import configureStore from './services/store'
import configureClient from './services/client'
import { loadDataForLocation } from './Routes'

const initialState = window.__REDUX_STATE__

const services = {}
services.history = createHistory()
services.client = configureClient({ baseURL: '/' }, () => services)
services.store = configureStore(initialState, services)

let prevLocation = null
services.history.listen((location) => {
  // you really should put this inside your app
  // that way you can catch errors, etc
  services.store.dispatch(loadDataForLocation(prevLocation))
  prevLocation = location
})

ReactDOM.hydrate(
  <App {...services} />,
  document.getElementById('react-container'),
)
