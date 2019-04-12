import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import PostList from '../posts/MainFeedPostList';
    
const MainFeed = () => {
    return (
        <div>
                <h1>Main Feed</h1>
                <PostList />
        </div>
    )
}
export default MainFeed;