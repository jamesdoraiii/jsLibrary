import React from 'react';
import CommentCreateAndList from '../comments/CommentCreateAndList';
import ReactPlayer from 'react-player'

const Post = (props) => {

    function likeAndUnlike () {
        var status = true;

        if(status === true){

            const accessToken = localStorage.getItem('token');

                fetch(`http://localhost:3008/post/like1up/${props.post.id}`,{
                method: 'PUT',
                headers: new Headers({
                        'Content-Type': 'application/json',
                        'Authorization': accessToken
                        })
                })
            .catch(err => console.log(err));
            alert("Post has been liked!");
            status = true;
        }
        /*
        if(status === false){

            const accessToken = localStorage.getItem('token');

                fetch(`http://localhost:3008/post/like1up/${props.post.id}`,{
                method: 'PUT',
                headers: new Headers({
                        'Content-Type': 'application/json',
                        'Authorization': accessToken
                        })
                })
            .catch(err => console.log(err));
            alert("Post has been liked");
            status = true;
        }
        */
    }

    return (

    <div className="mainTrackBox">
        <hr />
        

        <ReactPlayer url={props.post.link} />
        <h1>Song: {props.post.trackname}</h1>
        <br />
        <h2>By: {props.post.artistname}</h2>
        <br />
        <button onClick = {likeAndUnlike}>Like!</button>
        <p> Number of likes: {props.post.numberoflikes}</p>
        <br />
        
        <CommentCreateAndList postIdentity = {props.post.id}/>
        
    </div>  
    )
}

export default Post;