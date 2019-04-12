import React from 'react';
import Comment from './Comment';

class CommentList extends React.Component{

        constructor() {
                super();
        
                this.state = {
                    comments: []
                }
        }

        componentDidMount = () => {
                this.fetchComments();
            }


        fetchComments = () => {

                const accessToken = localStorage.getItem('token');

                fetch(`http://localhost:3008/comment/findpostcomments/${this.props.postIdentity}`,{
                method: 'GET',
                headers: new Headers({
                        'Content-Type': 'application/json',
                        'Authorization': accessToken
                        })
                })
                        .then(res => res.json())
                        .then(data => {
                                this.setState({
                                        comments : data
                })
            })
            .catch(err => console.log(err));
    }

    render(){
        let finishedComments = this.state.comments.map(data => {
            return (
                <Comment key={data.id} comment={data}/>
            )
        })

        return(
                <div>       
                <h5>Comments on this post:</h5>
                {finishedComments}

                </div>
               
        )

    }
}
export default CommentList;