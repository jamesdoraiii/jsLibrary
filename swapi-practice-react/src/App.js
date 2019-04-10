import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SwapiApp from './components/SwapiApp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Swapi App</h1>
        <SwapiApp />
      </div>
    );
  }
}

export default App;
