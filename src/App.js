import React, { Component } from 'react';
import logo from './SWElogo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
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
