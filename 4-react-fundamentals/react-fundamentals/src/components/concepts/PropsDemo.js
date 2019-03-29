import React from 'react';
import PropTypes from 'prop-types';

const propsFromOutside = [
    { string: 'Color Toggle', function: 'colorToggle' },
    { string: 'Background Color Toggle', function: 'backgroundToggle' },
    { string: 'Border Radius Toggle', function: 'borderRadiusToggle' },
    { string: 'Border Style Toggle', function: 'borderStyleToggle' }
]

export default class PropsDemo extends React.Component {

    constructor() {
        super();
        this.state = {
            color: 'white',
            backgroundColor: 'blue',
            borderRadius: '5px',
            borderStyle: 'dashed',
            display: 'inline-block',
            width: '300px',
            textAlign: 'center'
        }

    }

    colorToggle = () => {
        this.setState({
            color: this.state.color === 'white' ? 'red' : 'white'
        })
    }

    backgroundToggle = () => {
        this.setState({
            backgroundColor: this.state.backgroundColor === "blue" ? "black" : "blue"
        })
    }

    borderRadiusToggle = () => {
        this.setState({
            borderRadius: this.state.borderRadius === "5px" ? "20px" : "5px"
        })

    }
    borderStyleToggle = () => {
        this.setState({
            borderStyle: this.state.borderStyle === "dashed" ? "solid" : "dashed"
        })

    }


    render() {
        const display = propsFromOutside.map((el,index) => {
            return(
                <FunctionalComp key={index} string={el.string} function={this[`${el.function}`]}/>
            )
        })

        return (
            <div className="main">
                <div className="mainDiv">
                    <div style={this.state}>
                        {display}
                    </div>
                </div>
            </div>


        )

    }

}

const FunctionalComp = (props) => {
    return (
        <div>
            <p>{props.string}</p>
            <button onClick={props.function}>Press Me!</button>
        </div>
    )
}

FunctionalComp.defaultProps = {
    string: 'this is a crazy thingamajigger!',
    function: () => console.log('PropTypes are crazy!')
}




