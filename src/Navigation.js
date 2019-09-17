import React, {Component, Fragment} from 'react';
import './Navigation.css'

class Nav extends Component{
    render(){
        return(
            <Fragment className='nav'>
            <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>FAQ</li>
            <li>CONTACT US</li>
            </ul>
            <button>Sign Up</button>
            </Fragment>
        )
    }
}

export default Nav