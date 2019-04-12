import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import PostList from '../posts/UserPagePostList';

const UserPage = () => {
    return (
        <div>
            <h1>Posts You Have Made:</h1>
        
            <PostList />
        </div>
    )
}
export default UserPage;