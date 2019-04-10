import React from 'react';

class Message extends React.Component{

    componentWillUnmount = () => {
        console.log('[Message.js] Inside componentWillUnmount');
    }

    render() {
        return (
            <h1>Hi Calcifer</h1>
        )
    }

}

export default Message;