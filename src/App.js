import React, { Component } from 'react';
import logo from './SWElogo.png';
import './App.css';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open:false});

  render() {
    return (
      // <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
      <div className="App">
        <AppBar
          title="SWEDashboard"
          onLeftIconButtonTouchTap={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={300}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <AppBar
            title="Menu"
            onLeftIconButtonTouchTap={this.handleToggle}
          />
          <MenuItem onClick={this.handleClose}>Dashboard</MenuItem>
          <MenuItem onClick={this.handleClose}>Resources</MenuItem>
        </Drawer>

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
