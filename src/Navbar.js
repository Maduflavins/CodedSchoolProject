import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component {
    render(){
        return(
            <header>
                <h2><a>CodedSchool.ng</a></h2>
                <nav>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact Us</a></li>
                    <li><a>New User</a></li>
                    <li><a>Login</a></li>
                </nav>
            </header>
        );
    
    }
}


export default Navbar;