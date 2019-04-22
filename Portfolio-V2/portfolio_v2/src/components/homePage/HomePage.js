import React from 'react'; 
import Radium from 'radium';
import RecentProjects from '../recentProjects/RecentProjects'
import picture from '../../assets/images/me.JPG';
import { Container, Row, Col, Button } from 'reactstrap';
import './homepage.css';

const styles = {
        spacertop : {
                height : "6em"
        },
        spacer : {
                height : "2em"
        },
        pagehead : {
                height: "10em"

        },
        line: {
                width : "30em",
                height: ".5px",
                background: "#333",
                backgroundImage: "linear-gradient(to right, #ccc, #333, #ccc)"
        },
        img : {
                height: "100%",
                width: "100%"
        },
        maincontent : {
                backgroundColor: "#dbdbdb",
                height: "100vh",
                overflowY: "none"
        },
        introduction : {
                backgroundColor: "white",
                padding: "1em",
                fontSize: "1em"
        },
        introductionbutton : {
                backgroundColor: "black",
                margin: "auto"
        }
        
       

}





class HomePage extends React.Component{
        constructor(props) {
                super(props);

        }
        
        render (){

        return(
        <div>  
                <div style={styles.spacertop}></div>
        
                <div className = "pagehead" style={styles.pagehead}>
                        <h1>James Dora III</h1>
                        <hr style = {styles.line}></hr>
                        <h4>Junior Developer, Indiana University Alumnus, Eleven Fifty Graduate</h4>
                </div>

                <div style = {styles.maincontent}>

                <div style={styles.spacer}></div>

                
                <Container>

                        <Row>
                                <Col><h1>Introduction</h1></Col>
                        </Row>

                        <Row>
                                <div style={styles.spacer}></div>
                        </Row>


                        <Row>
                                <Col sm="5"><img src={picture} style = {styles.img}></img></Col>

                                <Col sm="7">

                                <Row><div style = {styles.spacer}></div></Row>

                                <Row><p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></Row>

                                <Row><Button style = {styles.introductionbutton}>Connect With Me on Linkedin</Button></Row>
                                
                                </Col>
                        </Row>

                        <Row>
                                <div style={styles.spacertop}></div>
                        </Row>


                </Container>
                
                
                        <div className = "recentprojectscontainer">
                        <h4>Recent Projects</h4>
                        <div className = "recentProjects">
                        <RecentProjects />
                        </div>
                        </div>


                        
                </div>


        </div>
        )}
}
export default Radium(HomePage);