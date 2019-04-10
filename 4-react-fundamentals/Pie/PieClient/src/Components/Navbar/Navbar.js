import React from 'react';
import './Navbar.css';
import piePic from '../../Assets/pie_pic.jpg';
import Logout from './Logout/Logout';

const Navbar = (props) => {
    return(
        <nav>
            <img className = "nav-img" src= {piePic} alt="Pie" />
            <h1>Pie Client</h1>
            <Logout />
            
        </nav>
    )
}

export default Navbar;
