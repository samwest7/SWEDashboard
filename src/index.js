import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const ThemedApp = () => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <App />
  </MuiThemeProvider>
)

ReactDOM.render(<ThemedApp />, document.getElementById('root'));
registerServiceWorker();
