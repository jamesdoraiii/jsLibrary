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

    newUserSignup = (event) => {

        this.state.username === '' || this.state.password === '' ? this.setState({message : 'Valid entry required for both username and password before continuing'}): this.setState ({ message : ''})

        if (this.state.username !== "" && this.state.password !== ""){
                fetch("http://localhost:3008/user/createuser", {
                method: 'POST', //2
                body: JSON.stringify({user:this.state}), 
                headers: new Headers({
                    'Content-Type': 'application/json' 
                })
            }).then(
                (response) => response.json() )
                .then((data) => {
                this.props.setToken(data.sessionToken) 
            }) 
                event.preventDefault()
        }
    }

    userLogin = (event) => {

        this.state.username === '' || this.state.password === '' ? this.setState({message : 'Valid entry required for both username and password before continuing'}): this.setState ({ message : ''})

        
        if (this.state.username !== "" && this.state.password !== ""){
            fetch("http://localhost:3008/user/signin", {
                method: 'POST',
                body: JSON.stringify({user:this.state}),
                headers: new Headers({
                    'Content-Type': 'application/json'
                    })
            }).then(
                (response) => response.json()
            ).then((data) => {
                if(data.sessionToken !== undefined){
                this.props.setToken(data.sessionToken)
                }
            }) 
            event.preventDefault()
        }
    }

    

    render() {
        return (
            <div>
                <h1>Log In/Sign Up</h1>
                <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input id="username" type="text" name="username" placeholder="enter username" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input id="su_password" type="password" name="password" placeholder="enter password" onChange={this.handleChange} />
                    </FormGroup>

                    <h5>{this.state.message}</h5>

                    <Button onClick = {this.userLogin}> Login </Button>
                    <p>New Here? Enter a username and password and press "Sign Up" to create a new account</p>
                    <Button onClick = {this.newUserSignup}> Sign Up </Button> 
                    
                </Form>
            </div>
        )
    }
}

export default Signup;