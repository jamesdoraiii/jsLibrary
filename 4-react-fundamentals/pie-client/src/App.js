import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Auth from './Components/Auth/Auth'
import Pies from './Components/Pies/Pies'

class App extends Component {
  state = {
    sessionToken : 'test'
  }

  viewConductor = () => {
    return this.state.sessionToken !== undefined ? <Pies /> : <Auth tokenHandler={this.storeSessionToken} />
  }

  render() {
    return (
      <div className="app">
        <Navbar />
        {this.viewConductor() }
      </div>
    );
  }
}

export default App;
