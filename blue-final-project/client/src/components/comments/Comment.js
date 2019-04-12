import React from 'react';

const Comment = (props) => {
        return (
        <ul>
                <li>{props.comment.commentcontent} 
                <br />
                Posted by: {props.comment.usernameofcommenter}
                
                </li>

        </ul>


        )}

export default Comment;