import React from 'react';
import JSXCompiler from '../JSXCompiler'

const JSXnotes = () => {
    return (
        <div className="main">
            <div className="mainDiv">
                <dl>
                    <dt>Resembles HTML</dt>
                    <dd>It's not HTML. Closer to JS.</dd>
                    <dt>React.createElement()</dt>
                    <dd>Used to construct and update the DOM.</dd>
                    <dt>Not required</dt>
                    <dd>Developers don't have to use JSX. </dd>
                </dl>
                <hr />
                +                   <h1>Egghead.io's JSX Compiler</h1>
                +                   <JSXCompiler />
            </div>
        </div>
    );
}

export default JSXnotes;