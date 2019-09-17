import React, { Component, Fragment } from "react";
import "../styles/Navigation.css";

class Nav extends Component {
  render() {
    return (
      <Fragment >
        <div className="nav">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>FAQ</li>
            <li>CONTACT US</li>
            <button>Sign Up</button>
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default Nav;
