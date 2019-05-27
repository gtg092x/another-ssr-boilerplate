import React from 'react'
import { Switch, Route, matchPath } from 'react-router'
import Home from './scenes/Home'
import About from './scenes/About'
import NotFound from './scenes/NotFound'
import {
  loadAbout,
  loadHome,
} from './services/loaders'

const HOME = {
  exact: true,
  path: '/',
}

const ABOUT = {
  path: '/about',
}

const noop = () => undefined

export const loadDataForLocation = prevLocation => async (
  dispatch,
  getState,
  extras,
) => {
  const { history } = extras
  const { location } = history

  if (prevLocation && prevLocation.pathname === location.pathname) {
    return noop;
  }

  if (matchPath(location.pathname, HOME)) {
    return dispatch(loadHome())
  }
  if (matchPath(location.pathname, ABOUT)) {
    return dispatch(loadAbout())
  }

  return noop
}

const Routes = () => (
  <Switch>
    <Route {...HOME} component={Home} />
    <Route {...ABOUT} component={About} />
    <Route component={NotFound} />
  </Switch>
)

export default Routes
