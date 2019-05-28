import React from 'react'
import Routes from './Routes'
import { Router } from 'react-router'
import { Provider as ReduxProvider } from 'react-redux'

export const SetStatusContext = React.createContext({})

const App = (props) => {
  const { store, history, setStatus } = props
  return (
    <SetStatusContext.Provider value={setStatus}>
      <ReduxProvider store={store}>
        <Router history={history}>
          <Routes />
        </Router>
      </ReduxProvider>
    </SetStatusContext.Provider>
  )
}


export default App
