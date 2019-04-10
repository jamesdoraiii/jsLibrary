import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Auth from './Components/Auth/Auth'
import Pies from './Components/Pies/Pies'

class App extends Component {
  state = {
    sessionToken : undefined
  }

  viewConductor = () => {
    return this.state.sessionToken !== undefined ? <Pies /> : <Auth tokenHandler={this.storeSessionToken} />
  }

  storeSessionToken = (token) => {
    this.setState({
      sessionToken : token
    })
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
