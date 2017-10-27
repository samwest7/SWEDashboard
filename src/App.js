import React, { Component } from 'react';
import logo from './SWElogo.png';
import './App.css';
import AppBar from 'material-ui/AppBar';

class App extends Component {

  render() {
    return (
      // <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
      <div className="App">
        <AppBar
          title="SWEDashboard"
        />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the SWE dashboard!</h1>
        </header>
        <p className="App-intro">
          This is gonna be awesome!
        </p>
      </div>
    );
  }
}

export default App;
