import React, { Component } from 'react';
import ThumbUp from 'react-icons/lib/fa/thumbs-up.js';
import ThumbDown from 'react-icons/lib/fa/thumbs-down.js';

export default class ClassComponentDemo extends Component {
    constructor(props){
        super(props);
        this.state = {count: 0, dislikecount: 0};
    }

    incrementCount = () => {
        console.log("increment called");
        this.setState(
            {count: this.state.count + 1}
        );
    }

    disincrementCount = () => {
        console.log("increment called");
        this.setState(
            {dislikecount: this.state.dislikecount + 1}
        );
    }

    render() {
        console.log("render called")
        return (
            <div className="main">
                <div className="mainDiv">
                <ClassComponentNotes />
                    <h3>Smash that like button!</h3>
                    <button onClick={this.incrementCount}><ThumbUp /> {this.state.count}</button>
                    <h3>Smash that dislike button!</h3>
                    <button onClick={this.disincrementCount}><ThumbDown /> {this.state.dislikecount}</button>
                </div>
            </div>
        );

}
}

const ClassComponentNotes = function () {
    return (
        <div>
            <h1>Class Components</h1>

            <p>Class components are considered the "React way" of writing components.</p>
            <dl>
                <dt>ES6 JS Classes</dt>
                <dd>Built on these, must understand them</dd>
                <dt>must extend Component </dt>
                <dd>Class components need to extend the React Component.</dd>
                <dt>render()</dt>
                <dd>Class components must always have a render method.</dd>
                <dt>export</dt>
                <dd>Only one class component exported per file.</dd>
            </dl>
        </div>
    );
};