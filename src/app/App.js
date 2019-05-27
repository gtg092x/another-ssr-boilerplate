import React from 'react'
import Routes from './Routes'
import { Router } from 'react-router'
import { Provider as ReduxProvider } from 'react-redux'

const App = (props) => {
  const { store, history } = props
  return (
    <ReduxProvider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </ReduxProvider>
  )
}


export default App
