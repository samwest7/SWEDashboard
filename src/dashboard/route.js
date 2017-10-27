export default (store) => ({
  path: 'dashboard',
  getComponent: (nextState, cb) => require.ensure([], require => {
    const ReactSplash = require('./dashboard.container').default
    cb(null, ReactSplash)
  })
})
