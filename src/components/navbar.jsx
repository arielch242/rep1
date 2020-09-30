import React, { Component } from "react";
import "../App.css";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav
        class="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#F9EDDB" }}
      >
        <a class="navbar-brand display-4" href="#">
          שו"ת
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                ראשי <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                שאל את הרב
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                מאגר שאלות
              </a>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">
                התחבר
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
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
