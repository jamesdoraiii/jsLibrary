import React from 'react';
import Comment from './Comment';
import Radium from 'radium';
import { Container, Row, Col } from 'reactstrap';

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

                fetch(`http://localhost:3008/comment/findusercomments`,{
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
                <Row>
                <Comment key={data.id} comment={data} deleteOption = 'true'/>
                </Row>
            )
        })

        return(

                <Container>
                <div>       
                {finishedComments}
                </div>
                </Container>
               
        )

    }
}
export default Radium(CommentList);