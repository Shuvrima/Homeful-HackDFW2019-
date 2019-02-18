
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainRouter from './components/MainRouter';


class App extends Component {
  render() {
    return (
      <div id="app">
        <MainRouter appClient={this.props.appClient}></MainRouter>
      </div>
    )
  }
}


export default App;