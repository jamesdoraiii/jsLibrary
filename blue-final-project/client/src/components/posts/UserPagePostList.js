import React from 'react';
import Post from './Post';

class PostList extends React.Component{

        constructor() {
                super();
        
                this.state = {
                    posts: []
                }
        }

        componentDidMount = () => {
                this.fetchPosts();
            }


        fetchPosts = () => {

                const accessToken = localStorage.getItem('token');

                fetch('http://localhost:3008/post/finduserposts',{
                method: 'GET',
                headers: new Headers({
                        'Content-Type': 'application/json',
                        'Authorization': accessToken
                        })
                })
                        .then(res => res.json())
                        .then(data => {
                                this.setState({
                                        posts : data
                })
            })
            .catch(err => console.log(err));
    }

    render(){
        let finishedPosts = this.state.posts.map(data => {
            return (
                <Post post={data}/>
            )
        })

        return(
                <div>
                {finishedPosts}
                </div>
        )

    }
}
export default PostList;