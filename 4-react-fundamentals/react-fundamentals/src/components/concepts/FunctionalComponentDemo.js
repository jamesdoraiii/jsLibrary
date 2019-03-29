import React from 'react';

import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container, Row, Col
} from 'reactstrap';

const FunctionalComponentDemo = () => { 
    return(
        <div className = "main">
            <div className="mainDiv">
            <h1>Functional Component</h1>
            <p>Functional components allow you to render information to the web page without having to use or change state.</p>
            <dl>
                <dt>Presentational</dt>
                <dd>Often used for simply rendering a small chunk of code to the dom.</dd>
                <dt>No 'this' keyword</dt>
                <dd>Unlike class components, functional ones don't use 'this'</dd>
                <dt>No state</dt>
                <dd>These are 'dumb' components for UI</dd>
                <dt>return()</dt>
                <dd>Must return a single element.</dd>
            </dl>
            </div>

           
            <div class = "challenge2">
            
                <h1>Challenge</h1>
                <row>

                <Col md ="6">
                <img src = "https://cdn-images-1.medium.com/max/2600/1*9s_UE0CM6cz2XJq8CTf29w.jpeg" alt = "test"></img>
                <h2>Fat Arrow</h2>
                <h6>A JS Library</h6>
                <p>const HelloWorld = () =></p>
                <button>click me yo!</button>
                </Col>

                <Col md="6">
                <img src = "https://i.ytimg.com/vi/BwAakF_VUV8/maxresdefault.jpg" alt = "test"></img>
                <h2>Regular Ole Function</h2>
                <h6>A JS Library</h6>
                <p>const HelloWorld = () =></p>
                <button>click me yo!</button>
                </Col>
            </row>
            </div>
        </div>
    );
};




export default FunctionalComponentDemo;