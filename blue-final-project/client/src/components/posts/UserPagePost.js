import React from 'react';
import CommentCreateAndList from '../comments/CommentCreateAndList';
import ReactPlayer from 'react-player';
import Radium from 'radium';
import {Button} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import Popup from "reactjs-popup";
import AOS from 'aos';
import { Form, FormGroup, Label, Input} from 'reactstrap';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();



const styles = {
    maincontainer:{
        padding: "2em",
        background: 'rgba(255,255,255,.95)',
        borderRadius: ".5em",
        height: "85vh",
        overflowY: "scroll",
        boxShadow: "1em 1em 2em #000000"
    },

    backgroundsetup:{
        backgroundColor: "black"
    },

    vidbox: {
    width: "23vw",

    },

    button: {
    width: "100%",
    fontFamily: "'Montserrat', sans-serif",
    backgroundColor: "black"
    },

    spacer: {
        height: "4vh"
    },
    spacersmall: {
        height: "1vh"
    },
    spacerbottom: {
        height: "9vh"
    },
    numoflikes: {
        marginTop: ".35em"
    },
    form:{
        background: 'rgba(255,255,255)',
        position: 'relative',
        margin: 'auto',
        padding: '2vh',
        right: '6vw',
        width: '22vw',
        fontSize: '3vh',
        textAlign: 'center',
        borderRadius: ".5em",
        boxShadow: ".5em .5em 1em #000000"
    },
    titletext: {
        color: "black",
        height: "100%",
        margin: "auto",
        textAlign: "center",
        borderRadius: ".5em",
        background: 'rgba(255,255,255)',
        textAlign: "center",
        fontSize: "2em",
        textShadow: "1px 1px #595959",
    }
    
}

class UserPagePost extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            likeNumForUpdate: Number(props.post.numberoflikes),
            hasBeenLiked: false,
            message: "",
            trackname: this.props.post.trackname,  
            artistname: this.props.post.artistname,
            link: this.props.post.link,
            deleted: false
        }
    }

    deletepost = () => {
        const accessToken = localStorage.getItem('token');

        fetch(`http://localhost:3008/post/deletepost/${this.props.post.id}`,{
                method: 'DELETE',
                headers: new Headers({
                        'Content-Type': 'application/json',
                        'Authorization': accessToken
                        })
                })
            .catch(err => console.log(err));
            this.setState({
                deleted: true
            });
        
            fetch(`http://localhost:3008/comment/deletepostcomments/${this.props.post.id}`,{
                method: 'DELETE',
                headers: new Headers({
                        'Content-Type': 'application/json',
                        'Authorization': accessToken
                        })
                })
            .catch(err => console.log(err));
    }

    likePost = () => {
        const accessToken = localStorage.getItem('token');

        if(this.state.hasBeenLiked == false){

            fetch(`http://localhost:3008/post/like1up/${this.props.post.id}`,{
            method: 'PUT',
            headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': accessToken
                    })
            })
        .then(response => response.json())
        .catch(err => console.log(err));
        
        this.state.likeNumForUpdate += 1;
        this.forceUpdate();
        this.setState({
            hasBeenLiked: true
        })
        }

        else{

            fetch(`http://localhost:3008/post/like1down/${this.props.post.id}`,{
            method: 'PUT',
            headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': accessToken
                    })
            })
        .then(response => response.json())
        .catch(err => console.log(err));
        
        this.state.likeNumForUpdate -= 1;
        this.forceUpdate();
        this.setState({
            hasBeenLiked: false
        })
        } 
    }

    handleChange = (event) => {
                
        this.setState({                   
            [event.target.name]: event.target.value,
            message: ''
        });
        
    }

    submitUpdate = (event) => {
        const accessToken = localStorage.getItem('token');

        if((this.state.link).slice(0,23) == "https://www.youtube.com"){
        fetch(`http://localhost:3008/post/update/${this.props.post.id}`,{
                method: 'PUT',
                body: JSON.stringify({post : this.state}),
                headers: new Headers({
                        'Content-Type': 'application/json',
                        'Authorization': accessToken
                        })
                })
            .catch(err => console.log(err));
            event.preventDefault()
            this.setState({message : 'Your update was submitted!'})
        }
        else{
            this.setState({message: "The link that you submitted does not appear to be a valid youtube link. Please use the standard youtube url with no link shorteners."})
            event.preventDefault()
        }
    }


    render(){
    
    if(this.state.deleted == false){ 
        
        return (
        
        <div>
        
            <Container style={styles.maincontainer} data-aos="flip-up" data-aos-delay="50" data-aos-duration="900">

        <Row>
            <Col><ReactPlayer url={this.state.link} style={styles.vidbox}/></Col>
        </Row>

        <Row>
            <Col><div style = {styles.spacer}></div></Col>
        </Row>

        <Row>
            <Col xs="8"><h2><b>Track Title: </b>{this.state.trackname}</h2></Col>
            <Col xs="4"><h5 style={styles.numoflikes}><b>Number of likes: </b>{this.state.likeNumForUpdate}</h5></Col>
        </Row>


        <Row>
            <Col><h3><b>Atrist Name: </b>{this.state.artistname}</h3></Col>
        </Row>

        <Row>
            <Col><h4><b>Date Posted: </b>{(this.props.post.createdAt).slice(0,10)}</h4></Col>
        </Row>

        <Row>
            <Col><div style = {styles.spacersmall}></div></Col>
        </Row>

        {this.state.deleted == false ? <Button style={styles.button} onClick = {this.deletepost}>Delete This Post?</Button> : <h4><b><u>This post has been deleted.</u></b></h4>}

        <Row>
            <Col><div style = {styles.spacersmall}></div></Col>
        </Row>

        {this.state.deleted == false ?
        <Popup trigger={<Button style={styles.button}>Update this Post</Button>} position="top center" closeOnDocumentClick>
            <div>
            <Form onSubmit={(e) => this.submitUpdate(e)} style={styles.form} data-aos="fade-up">
                    <FormGroup>
                        <Label for="trackname">Track Name: </Label>
                        <Input id="trackname" type="text" name="trackname" placeholder="Enter Track Name:" onChange={this.handleChange} value = {this.state.trackname} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="artistname">Artist Name: </Label>
                        <Input id="artistname" type="text" name="artistname" placeholder="Enter Artist Name:" onChange={this.handleChange} value = {this.state.artistname} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="link">Link to Track:</Label>
                        <Input id="link" type="text" name="link" placeholder="Enter Link:" onChange={this.handleChange} value = {this.state.link} />
                    </FormGroup>
                    <h6>{this.state.message}</h6>
                    {this.state.message === 'Your update was submitted!' ? <div></div> : <Button size="lg" type="submit" style = {styles.button}> Submit Update </Button>}
                </Form>
            </div>
        </Popup> : <div></div>}



        <Row>
            <Col><div style = {styles.spacer}></div></Col>
        </Row>
        
        
        <Row>
        <Col><CommentCreateAndList postIdentity = {this.props.post.id}/></Col>
        </Row>
        
        
    </Container> 
            <div style = {styles.spacerbottom}></div>
            

        </div>  
        )
    }

    else{
    return(<div>

    <h1 style = {styles.titletext}>Your post for "{this.props.post.trackname}" by "{this.props.post.artistname}" has been deleted</h1>
    <div style = {styles.spacerbottom}></div>

    </div>)
    }

}}

export default Radium(UserPagePost);