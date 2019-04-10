import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',  
            password: '',
            message: '',
        };
    }

    handleChange = (event) => {
                
        this.setState({                   
            [event.target.name]: event.target.value,
        });
        
    }

    handleSubmit = (event) => {

        this.state.username === '' ? this.state.message = 'User name is required': this.state.message = ''

        fetch("http://localhost:3000/api/user/createuser", {
        method: 'POST', //2
        body: JSON.stringify({user:this.state}), //3
        headers: new Headers({
            'Content-Type': 'application/json' //4
        })
    }).then(
        (response) => response.json() //5
    ).then((data) => {
        this.props.setToken(data.sessionToken) //6
    }) 
        event.preventDefault()
    }

    

    render() {
        return (
            <div>
                <h1>Sign Up</h1>
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellat, atque nulla, soluta vero reprehenderit numquam incidunt, rem quaerat quos voluptatum perferendis. Distinctio culpa iste atque blanditiis placeat qui ipsa?</h6>
                <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input id="username" type="text" name="username" placeholder="enter username" onChange={this.handleChange} />
                        <h1>{this.state.message}</h1>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input id="su_password" type="password" name="password" placeholder="enter password" onChange={this.handleChange} />
                    </FormGroup>
                    <Button type="submit"> Submit </Button> 
                </Form>
            </div>
        )
    }
}

export default Signup;