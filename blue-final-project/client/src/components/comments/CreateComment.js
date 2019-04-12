import React, {Component} from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
    
class CreateComment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            commentcontent: '',
            postidofparent: this.props.postIdentity
        };
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
                alert("Your comment was submitted!")
                event.preventDefault();
        }

        event.preventDefault()
    }
    
    
    
    
    
    render (){
    return (
        <div>
                <Form onSubmit={this.commentCreation} >
                    <FormGroup>
                        <Label for="commentcontent">Comment: </Label>
                        <Input id="commentcontent" type="text" name="commentcontent" placeholder="Enter Your Comment:" onChange={this.handleChange} />
                    </FormGroup>
                    <Button type="submit"> Post Comment </Button>
                </Form>
        </div>
    )};
}
export default CreateComment;