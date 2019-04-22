import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation'
import HomePage from './components/homePage/HomePage'
import {
  BrowserRouter as Router,
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router><Navigation /></Router>
      
      </div>
    );
  }
}

export default App;
