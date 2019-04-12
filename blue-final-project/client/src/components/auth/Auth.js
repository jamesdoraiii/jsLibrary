import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Signup from './Signup';
import './auth.css'

    
const Auth = (props) => {
    return (
        <Container className="auth-container">
            <Row>
                <Col md="12">
                    <Signup setToken={props.setToken}/>
                </Col>
            </Row>
        </Container>
    )
}
export default Auth;