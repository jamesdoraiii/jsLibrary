import React from 'react'; 
import Radium from 'radium';
import { Container, Row, Col, Button } from 'reactstrap';

import pokemon from '../../assets/images/pokemon.jpg'


import htmlLogo from '../../assets/images/html.png';
import cssLogo from '../../assets/images/css.png';
import visualStudio from '../../assets/images/visualstudiocode.png';
import apiLogo from '../../assets/images/api-icon.png';



const styles = {
        container: {
                backgroundColor: "white",
                padding: "4em"
        },
        spacertop : {
                height : "6em"
        },
        spacer : {
                height : "1em"
        },
        img : {
                marginTop: "20%",
                height: "70%",
                width: "110%"
        },
        header : {
                textAlign: "center",
                textDecoration: "underline"
        },
        button : {
                backgroundColor: "black",
                margin: "auto",
                width: "80%"
        },
        logo: {
                height: "5em",
                width: "6em",
                margin: "auto"
        },
        titleText: {
                textAlign: "center",
                width: "100%"
        },
        line: {
                width : "28em",
                height: ".5px",
                background: "#333",
                backgroundImage: "linear-gradient(to right, #ccc, #333, #ccc)"
        },
        

}



class ProjectsPage extends React.Component{
        constructor(props) {
                super(props);
        }
        
        render (){

        return(
        <Container style={styles.container}>
                <Row>
                        <Col xl = "4">
                                <img img src={pokemon} style = {styles.img}></img>
                        </Col>

                        <Col xl = "1">
                        </Col>


                        <Col xl = "7">

                                <Row><h3 style = {styles.titleText}>Whos That Pokemon!? Api Project</h3></Row>

                                <Row><hr style = {styles.line}></hr></Row>

                                <Row>
                                        <div style = {styles.spacer}></div>
                                </Row>
                                
                                <Row><p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></Row>

                                <Row>
                                        <div style = {styles.spacer}></div>
                                </Row>

                                <Row>
                                        <Col xl = "6"><Button style={styles.button}>View Project</Button></Col>
                                        <Col xl = "6"><Button style={styles.button}>View Github Repo</Button></Col>
                                </Row>

                                <Row>
                                        <div style = {styles.spacer}></div>
                                </Row>

                                <Row>
                                        <Col><h5 style = {styles.header}>Tools Used:</h5></Col>
                                </Row>

                                <Row>
                                        <div style = {styles.spacer}></div>
                                </Row>

                                <Row>
                                        <Col sm = "3"><img img src={htmlLogo} style = {styles.logo}></img></Col>
                                        <Col sm = "3"><img img src={cssLogo} style = {styles.logo}></img></Col>
                                        <Col sm = "3"><img img src={visualStudio} style = {styles.logo}></img></Col>
                                        <Col sm = "3"><img img src={apiLogo} style = {styles.logo}></img></Col>
                                </Row>

                        </Col>


                </Row>

        </Container>
        )}
}
export default Radium(ProjectsPage);