import React, { Component } from 'react'
import AppBarMenu from './appBarMenu'

export default () => (WrappedComponent) => {
  class AppBarWrapped extends Component {
    render () {
      return (
        <div className="App">
          <AppBarMenu />
          <WrappedComponent {...this.props} />
        </div>
      )
    }
  }
  return AppBarWrapped
}
