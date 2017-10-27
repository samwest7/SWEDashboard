import App from '../app'
import dashboard from '../dashboard/route'
//import pageNotFound from '../page-not-found/route'
//import counter from '../counter/route'
//import authorize from '../authorize/route'

/*
  Configuration of routes. This uses individual sub-routes
  in their "parent" components but they can be defined here.
  Synchronously loading the App component since it's the
  root component for the entire application.
  The sub-routes defined take in store because they define
  their routes asynchronously.
 */
export default (store) => ({
  path: '/',
  component: App,
  indexRoute: {
    onEnter: (nextState, replace) => replace('/react')
  },
  childRoutes: [
    dashboard(store),
  //  reactSplash(store),
  //  counter(store),
  //  authorize(store),
    // page not found is a wild card - should always be last
  //  pageNotFound(store)
  ]
})
