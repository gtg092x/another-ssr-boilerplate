import {
  createStore,
  applyMiddleware,
} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

export default function configureStore(initialState, services) {
  return createStore(
    reducer,
    initialState,
    applyMiddleware(thunk.withExtraArgument(services)),
  )
}
