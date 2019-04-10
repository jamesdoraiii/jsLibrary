import React, { Component } from 'react';
import './App.css';
import Message from './Components/Message';

class App extends Component {
  constructor(){
    super();
    console.log('[App.js] Inside the constructor()');

    this.state = {
      name : 'Calcifer',
      ghibliFilms : []
    }
  }

  componentDidMount = () => {
    fetch('https://ghibliapi.herokuapp.com/films')
    .then(response => response.json())
    .then(filmData => {
      this.setState({
        ghibliFilms : filmData
      }, () => console.log(this.state))
    })
    .catch(err => console.log(err))
  }

  changeName = () => {
    let newName = this.state.name === 'Calcifer' ? 'Cat Bus': 'Calcifer';

    this.setState({
        name: newName
    })
  }

  shouldComponentUpdate = () => {
    console.log('[App.js] Inside shouldComponentUpdate()');
    return true;
  }

  render() {
    console.log('[App.js] Inside the render()')

    const messageToggle = this.state.name === 'Calcifer' ? <Message />: null;

    return (
      <div className="App">
        <button onClick = {this.changeName}>{this.state.name}</button>
        {messageToggle}
      </div>
    );
  }
}

export default App;
