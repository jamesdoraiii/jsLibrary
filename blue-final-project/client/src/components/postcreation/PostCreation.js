import React, {Component} from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
    
class PostCreation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            trackname: '',  
            artistname: '',
            link: '',
            numberoflikes: 0
        };
    }

    handleChange = (event) => {
                
        this.setState({                   
            [event.target.name]: event.target.value,
        });
        
    }

    postCreation = (event) => {

        const accessToken = localStorage.getItem('token');

        this.state.trackname === '' || this.state.artistname === '' || this.state.link === '' ? this.setState({message : 'Valid entry required for all fields'}): this.setState ({ message : ''})

        if (this.state.trackname !== "" && this.state.artistname !== "" && this.state.link !== ""){
                fetch("http://localhost:3008/post/create", {
                method: 'POST', 
                body: JSON.stringify({post:this.state}), 
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': accessToken
                    })
                
            }).then(
                (response) => response.json() )

                event.preventDefault();
                this.setState({message : 'Your post was submitted. Head to the main feed to view it!'})
        }

        event.preventDefault()
    }
    
    
    
    
    
    render (){
    return (
        <div>
            <h1>Post Creation</h1>
                <Form onSubmit={this.postCreation} >
                    <FormGroup>
                        <Label for="trackname">Track Name: </Label>
                        <Input id="trackname" type="text" name="trackname" placeholder="Enter Track Name:" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="artistname">Artist Name: </Label>
                        <Input id="artistname" type="text" name="artistname" placeholder="Enter Artist Name:" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="link">Link to Track: </Label>
                        <Input id="link" type="text" name="link" placeholder="Enter Link:" onChange={this.handleChange} />
                    </FormGroup>
                    <h5>{this.state.message}</h5>
                    {this.state.message === 'Your post was submitted. Head to the main feed to view it!' ? <div></div> : <Button type="submit"> Submit Post </Button>}
                </Form>
        </div>
    )};
}
export default PostCreation;