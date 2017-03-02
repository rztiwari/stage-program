import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LoginComponent from './components/login';



ReactDOM.render(<MuiThemeProvider><LoginComponent /></MuiThemeProvider>, document.getElementById('app'));
