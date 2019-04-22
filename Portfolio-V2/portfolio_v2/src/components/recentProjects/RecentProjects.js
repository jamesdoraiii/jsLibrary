import React from 'react'; 
import Radium from 'radium';
import { Container, Row, Col, Button } from 'reactstrap';

const styles = {
        button : {
                backgroundColor: "black",
                margin: "auto",
                width: "70%"
        },
}



class RecentProjects extends React.Component{
        constructor(props) {
                super(props);

        }
        
        render (){

        return(
        <div>  
                <div>
                <h5>Beat Share</h5>
                <p>Beat Share is a fully functioning social media platform made for sharing and discussing House Music. It uses a React front end and a Node back end</p>
                <Button style = {styles.button}>View!</Button>
                </div>

                <hr></hr>

                <div>
                <h5>Who's That Pokemon</h5>
                <p>Here is a fun pokemon quiz game I developed. It utilizes the PokeAPI and was a great way for me to gain experience with REST API's</p>
                <Button style = {styles.button}>View!</Button>
                </div>

                <hr></hr>

                <div>
                <h5>Portfolio V1</h5>
                <p>This was my first portfolio which I made during my time at Eleven Fifty. I developed it when I was still a very young developer and its a good show of how much I've grown.</p>
                <Button style = {styles.button}>View!</Button>
                </div>



        </div>
        )}
}
export default Radium(RecentProjects);