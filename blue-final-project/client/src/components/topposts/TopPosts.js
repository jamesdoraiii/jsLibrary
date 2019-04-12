import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import TopPostsList from '../posts/TopPostsList';
    

//Probably going to have to make this a class in order for the user to toggle between what they want to see. create a state value for message that will be ('week, 'date', 'month') etc. This message will be displayed on the top of the page so users know which list they are looking at. There will be a button for each time period and when you select a button it will change the message and run the fetch again. The fetch will use the method as a parameter in the fetch you url to hit the right endpoint.

const TopPosts = () => {
    return (
        <div>
                <h1>TopPosts</h1>
                <TopPostsList />
        </div>
    )
}
export default TopPosts;