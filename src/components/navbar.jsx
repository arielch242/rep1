import React, { Component } from "react";
import { Link, NavLink } from 'react-router-dom';


class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light shadow-sm"
        style={{ backgroundColor: "#F9EDDB" }}
      >
        <a className="navbar-brand display-4" href="home.jsx">
          שו"ת
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                ראשי <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="about.jsx">
                אודות
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="qna.jsx">
                מאגר שאלות
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="signin.jsx">
                התחבר
              </NavLink>
            </li>
           <li className="nav-item">
              <NavLink className="nav-link" to="signup.jsx">
                הרשם
              </NavLink>
            </li>
           </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
