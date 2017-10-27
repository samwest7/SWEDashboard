import React, { Component } from 'react';
//import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const App = ({ children }) => {
  return (
    <div>
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <AppRouter />
      </MuiThemeProvider>
    </div>
  )
}

App.propTypes = {
  children: PropTypes.node
}

export default App
