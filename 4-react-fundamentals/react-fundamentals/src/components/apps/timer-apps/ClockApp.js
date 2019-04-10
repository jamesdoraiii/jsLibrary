import React, { Component } from 'react';

export default class ClockApp extends Component {

  constructor(props) {
    super(props);
    var date = this.getTimeString();
    this.state = {
      time: date
    }
  }

  getTimeString() {
    const date = new Date(Date.now()).toLocaleTimeString();
    return date;
  }

  render() {
    return (
      <div>
        <h1 className="section-title">React Clock</h1>
        <hr className="explanation" />
        <p>{this.state.time}</p>
      </div>
    );
  }
}

