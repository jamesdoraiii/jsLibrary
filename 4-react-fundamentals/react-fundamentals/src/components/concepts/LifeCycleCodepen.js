import React from 'react';

const DisplayIframe = () => {

    let styles = {
        width: '100%',
        height: '700px',
    }

    return (
        <div className= "main">
        <div className="mainDiv">
            <h1>Life Cycle Diagramn</h1>
            <hr></hr>
            <iframe src="https://codepen.io/ccharris/full/wxdKYa" style = {styles}></iframe>
        </div>
        </div>
    )
}

export default DisplayIframe;