import React, { Component } from "react";
import "../App.css";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light"
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
              <a className="nav-link" href="home.jsx">
                ראשי <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="ask.jsx">
                שאל את הרב
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="archive.jsx">
                מאגר שאלות
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="signin.jsx">
                התחבר
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="signup.jsx">
                הרשם
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
