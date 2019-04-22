import React from 'react'; 
import {
    Route,
    Link,
    Switch
  } from 'react-router-dom';
import Radium from 'radium';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';

import HomePage from '../homePage/HomePage';
import ProjectsPage from '../projectsPage/ProjectsPage';
import AboutPage from '../aboutPage/AboutPage';
import ContactPage from '../contactPage/ContactPage';
import ResumePage from '../resumePage/ResumePage';

const styles = {
  navbar: {
    background: "black",
    height: "4em"
  },
  navbartext: {
    color: "white",
    fontSize: "1.2em"
  },
  nav: {
    margin: "auto"
  }


}

class Navigation extends React.Component{
        constructor(props) {
                super(props);
        }

        render (){

        return(
        <div>

        <Navbar d expand="md" fixed="top" id="navbar" style = {styles.navbar}>
        
        <Nav style = {styles.nav}>
          <NavItem>
            <NavLink><Link to="/" style = {styles.navbartext}>Home</Link></NavLink>
          </NavItem>
          <NavItem>
                <NavLink><Link to="/projects" style = {styles.navbartext}>Projects</Link></NavLink>
          </NavItem>
          <NavItem>
                <NavLink><Link to="/aboutme" style = {styles.navbartext}>About Me</Link></NavLink>
          </NavItem>
          <NavItem>
                <NavLink><Link to="/contact" style = {styles.navbartext}>Contact</Link></NavLink>
          </NavItem>
          <NavItem>
                <NavLink><Link to="/resume" style = {styles.navbartext}>Resume</Link></NavLink>
          </NavItem>
        </Nav>
        </Navbar>

        <div className="sidebar-route">
            <Switch>
                <Route exact path="/"><HomePage /></Route>
                
                <Route exact path="/projects"><ProjectsPage /></Route>
                
                <Route exact path="/aboutme"><AboutPage /></Route>
                
                <Route exact path="/contact"><ContactPage /></Route>
                
                <Route exact path="/resume"><ResumePage /></Route>
            </Switch>
        </div>


        </div>
        )}
}
export default Radium(Navigation);