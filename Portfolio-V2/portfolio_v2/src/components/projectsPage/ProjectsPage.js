import React from 'react'; 
import Radium from 'radium';
import BeatShareProject from '../projects/BeatShareProject';
import PokeAPIproject from '../projects/PokeAPIproject';

const styles = {
        spacertop : {
                height : "6em"
        },
        spacer : {
                height : "3em"
        },
        maincontent : {
                backgroundColor: "#dbdbdb",
                height: "100%"
        },
        pagehead : {
                height: "12.5em"

        },
        line: {
                width : "38em",
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
        <div>  
                <div style = {styles.pagehead}>
                        <div style = {styles.spacertop}></div>
                        <h1>See Some Examples of My Work</h1>
                        <hr style = {styles.line}></hr>
                </div>

                <div style = {styles.maincontent}>
                        <div style = {styles.spacer}></div>
                        <PokeAPIproject />
                        <div style = {styles.spacer}></div>
                        <PokeAPIproject />
                        <div style = {styles.spacer}></div>
                        <PokeAPIproject />

                        <div style = {styles.spacertop}></div>
                </div>




        </div>
        )}
}
export default Radium(ProjectsPage);