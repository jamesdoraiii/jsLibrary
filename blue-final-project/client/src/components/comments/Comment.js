import React from 'react';
import {ListGroupItem } from 'reactstrap';
import Radium from 'radium';
import Popup from 'reactjs-popup';
import Post from '../posts/Post'

const styles = {
        fontset: {
                fontFamily: "'Montserrat', sans-serif",
                width: "30vw"
            },
        button: {
                width: "100%",
                fontFamily: "'Montserrat', sans-serif",
                background: 'rgba(255,255,255,.95)',
                borderRadius: '2em'
                },
        spacer: {
                height: "4vh"
                },
        spacer2: {
                height: ".5vh"
                },
        popup: {
                width: "55vw",
                height: "40vh",
                position: "relative",
                right: "20vw"

        },
        subtitletext: {
                color: "white",
                textAlign: "center",
                fontSize: "2em",
                textShadow: "1px 1px #595959",
            }

}

class Comment extends React.Component{

        constructor(props) {
                super(props);
        
                this.state = {
                    post: [],
                    open: false,
                    deleted: false 
                }
                this.openModal = this.openModal.bind(this)
                this.closeModal = this.closeModal.bind(this)
        }

        openModal (){
                this.setState({ open: true })
              };
        
        closeModal () {
                this.setState({ open: false })
              }


        deletecomment = () => {
                const accessToken = localStorage.getItem('token');
        
                fetch(`http://localhost:3008/comment/deletecomment/${this.props.comment.id}`,{
                        method: 'DELETE',
                        headers: new Headers({
                                'Content-Type': 'application/json',
                                'Authorization': accessToken
                                })
                        })
                    .catch(err => console.log(err));
                    this.setState({
                            deleted: true
                    })
                    
            }
        
        fetchPost = () => {

                const accessToken = localStorage.getItem('token');

                fetch(`http://localhost:3008/post/findspecificpost/${this.props.comment.postidofparent}`,{
                method: 'GET',
                headers: new Headers({
                        'Content-Type': 'application/json',
                        'Authorization': accessToken
                        })
                })
                        .then(res => res.json())
                        .then(data => {
                                this.setState({
                                        post : data
                })
            })
            .catch(err => console.log(err));
        }

        componentDidMount = () => {
                this.fetchPost();
        }

        tester = () => {
                console.log(this.state.post[0])
        }




        render(){
        return (
        <div>
                <ListGroupItem style={styles.fontset}><b>"{this.props.comment.usernameofcommenter}" says: </b>{this.props.comment.commentcontent}</ListGroupItem>

                

                {this.props.deleteOption == 'true' && this.state.deleted == false ? 
                
                <Popup trigger = {<button className="button" style = {styles.button}>View Parent Post</button>} position = "top center">
                        <div style = {styles.popup}>
                                <Post post={this.state.post[0]}/> 
                        </div>
                
                </Popup>
                
                : <div></div>}
                




                {this.props.deleteOption == 'true' ? <div style={styles.spacer2}></div>: <div></div>}
                
                {this.props.deleteOption == 'true' && this.state.deleted == false ? <button onClick = {this.deletecomment} style = {styles.button}>Delete This Comment?</button>: <div></div>}

                {this.state.deleted == true ? <h4 style = {styles.subtitletext}>This Comment has been deleted.</h4> : <div></div>}


                {this.props.deleteOption == 'true' ? <div style={styles.spacer}></div>: <div></div>}

                
        </div>



        )}}

export default Radium(Comment);