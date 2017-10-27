import React from 'react'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import routes from './routes'
import initStore from '../store'

// Easy access to reducer name
export const REDUCER_NAME = 'routing'

const store = initStore()

// connect history to redux store
export const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: state => state.get(REDUCER_NAME)
})

const AppRouter = () => {
  return (
    <Provider store={store}>
      <Router history={history} routes={routes(store)} />
    </Provider>
  )
}

export default AppRouter
