import React, { Component } from 'react';

import SwapiDisplay from './SwapiDisplay';

const baseURL = 'https://swapi.co/api/'

export default class SwapiApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
          searchItem: 'people/',
          results: []
        }
    }

    changeAndRetrieve = async(event, term) => {
        await this.setState({
          searchItem: term
        });
        this.fetchResults(); 
      }
    
      fetchResults = () => {
        let url = baseURL + this.state.searchItem;
        fetch(url)
          .then(
            (response) => response.json()
          ).then((data) => {
            this.setState({ results: data.results})
            console.log(this.state.results);
          })
      }
    
      render() {
        return(
            <div>
                <button onClick={e => this.changeAndRetrieve(e, "people/")}>People</button>
                <button onClick={e => this.changeAndRetrieve(e, "planets/")}>Planets</button>
                <button onClick={e => this.changeAndRetrieve(e, "starships/")}>Starships</button>
                <button onClick={e => this.changeAndRetrieve(e, "species/")}>Species</button>
                
                {//this.state.results.map ( i => (<SwapiDisplay data = {this.state.results[i]} />))}
                }
            </div>
        )

      }

    }

