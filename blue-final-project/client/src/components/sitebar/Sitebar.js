import React from 'react'; 
import {
    Route,
    Link,
    Switch
  } from 'react-router-dom';

import MainFeed from '../mainfeed/MainFeed'
import PostCreation from '../postcreation/PostCreation'
import TopPosts from '../topposts/TopPosts'
import UserPage from '../userpage/UserPage'





const SiteBar = (props) => (
    
    <div className="sidebar">
        <div className="sidebar-list-styling">
            <ul>
            <li><Link to="/">Main Feed</Link></li>
            <li><Link to="/postcreation">Post Creation</Link></li>
            <li><Link to="/topposts">Top Posts</Link></li>
            <li><Link to="/userpage">User Page</Link></li>
            </ul>
        </div>
        <div className="sidebar-route">
            <Switch>
                <Route exact path="/"><MainFeed /></Route>
                <Route exact path="/postcreation"><PostCreation /></Route>
                <Route exact path="/topposts"><TopPosts /></Route>
                <Route exact path="/userpage"><UserPage /></Route>
            </Switch>
        </div>
    </div>
);


export default SiteBar;