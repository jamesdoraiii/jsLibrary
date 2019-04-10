import React, { Component } from 'react'; // import the React library
import NytResults from './NytResults'; //import the NYT Results component

const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = '1mEtGs1rGNHMU9IZZYUws4RYMAPfeGet';
//setup the variables for base URL and key

export default class NytApp extends Component {//build component
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      startDate: '',
      endDate: '',
      pageNumber: 0,
      results: []
    }
  }
  //setup state for component and give it values.
  

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  //basically all this does is make sure that the value in the class's state is always matching what the user places in the inputs. For example if the user changes the start date, it is automatically being changed in this class's state so that the next time a fetch is called, the right information is being pulled up.

  handleSubmit = (event) => {
    this.setState({pageNumber: 0})
    this.fetchResults()
    event.preventDefault()
  }

  //this function is called on submit. It sets the page number back to 0 and then calls fetch results. it also uses prevent default so that the page does not refresh. 

  fetchResults = () => {
    let url = `${baseURL}?api-key=${key}&page=${this.state.pageNumber}&q=${this.state.search}`
    url = this.state.startDate ? url + `&begin_date=${this.state.startDate}` : url
    url = this.state.endDate ? url + `&end_date=${this.state.endDate}` : url
    fetch(url)
      .then(
        (response) => response.json()
      ).then((data) => {
        this.setState({ results: data.response.docs })
      })
  }
//This is your standard fetch results function. It builds out the url using the base url, the key, the page number, and the search term. Then it uses turnaries. The way they work here is that if there is a start date, it adds a start date and if not it does not. Then it does the same thing with the end date before fetching. 

  changePageNumber = (e, direction) => {
    e.preventDefault()
    if (direction === 'down') {
      if (this.state.pageNumber > 0) {
        let newPageNumber = this.state.pageNumber - 1
        this.setState({ pageNumber: newPageNumber })
        this.fetchResults();
      }
    }
    if (direction === 'up') {
      let newPageNumber = this.state.pageNumber + 1
      this.setState({ pageNumber: newPageNumber })
      this.fetchResults();
    }
  }

  //This function is called when the change page up and change page down buttons are selected. A string for either up or down is passed to the function bassed on which button is pressed. What will happen is a new page number will be created. Then this new page number will be set to the state. Then fetch results will be called where the url will be built out with the new page number. Thus displaying new information. 

  render() {
    return (
      <div className="main">
        <div className="mainDiv">
          <form onSubmit={e => this.handleSubmit(e)}>
            <span>Enter a SINGLE search term (required): </span>
            <input type="text" name="search" onChange={this.handleChange} required /><br />
            <span>Enter a start date: </span>
            <input type="date" name="startDate" pattern="[0-9]{8}" onChange={this.handleChange} /><br />
            <span>Enter an end date: </span>
            <input type="date" name="endDate" pattern="[0-9]{8}" onChange={this.handleChange} /><br />
            <button className="submit">Submit search</button>
          </form>
          {
            this.state.results.length > 0 ? <NytResults results={this.state.results} changePage={this.changePageNumber} /> : <div></div>
          }
        </div>
      </div>
    );
  }


}