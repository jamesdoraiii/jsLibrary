import React, {Component} from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Comment from './Comment';

class CommentCreateAndList extends React.Component{
        
        constructor(props) {
                super(props);
        
                this.state = {
                    comments: [],
                    commentcontent: '',
                    postidofparent: this.props.postIdentity
                };       
        }

        componentDidMount = () => {
                this.fetchComments();
            }

        handleChange = (event) => {
                this.setState({                   
                    [event.target.name]: event.target.value,
                }); 
            }
            
        commentCreation = (event) => {

                const accessToken = localStorage.getItem('token');
        
                if (this.state.commentcontent !== "" ){
                        fetch("http://localhost:3008/comment/create", {
                        method: 'POST', 
                        body: JSON.stringify({comment:this.state}), 
                        headers: new Headers({
                            'Content-Type': 'application/json',
                            'Authorization': accessToken
                            })
                        
                    }).then(
                        (response) => response.json() )
                        //alert("Your comment was submitted!")
                        this.fetchComments();
                        event.preventDefault();
                }
                event.preventDefault();
            }

            fetchComments = () => {
                console.log("inside fetch comments")
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
        
            render (){

                let finishedComments = this.state.comments.map(data => {
                        return (
                            <Comment key={data.id} comment={data}/>
                        )
                    })
                return (
                    <div>
                            <Form onSubmit={this.commentCreation} >
                                <FormGroup>
                                    <Label for="commentcontent">Comment: </Label>
                                    <Input id="commentcontent" type="text" name="commentcontent" placeholder="Enter Your Comment:" onChange={this.handleChange} />
                                </FormGroup>
                                <Button type="submit"> Post Comment </Button>
                            </Form>
                            <div>       
                                <h5>Comments on this post:</h5>
                                {finishedComments}

                                </div>
                    </div>
                )};

}
export default CommentCreateAndList;