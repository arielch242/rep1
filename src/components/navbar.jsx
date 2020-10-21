import React, { Component } from "react";
import { Link, NavLink } from 'react-router-dom';


class NavBar extends Component {
  state = {};
  render() {
<<<<<<< HEAD
    return (
=======
    const {user} = this.props; 
        return (
>>>>>>> 8c86c5d7fd1878c9053c382964cf3f5720e94fab
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
<<<<<<< HEAD
              <NavLink className="nav-link" to="about.jsx">
=======
              <NavLink className="nav-link" to="/about">
>>>>>>> 8c86c5d7fd1878c9053c382964cf3f5720e94fab
                אודות
              </NavLink>
            </li>
            <li className="nav-item">
<<<<<<< HEAD
              <NavLink className="nav-link" to="qna.jsx">
=======
              <NavLink className="nav-link" to="/qna">
>>>>>>> 8c86c5d7fd1878c9053c382964cf3f5720e94fab
                מאגר שאלות
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
<<<<<<< HEAD
            <li className="nav-item">
              <NavLink className="nav-link" to="signin.jsx">
=======
            {/* if user is loggod out */}
            {!user && ( 
              <React.Fragment>
            <li className="nav-item">
              <NavLink className="nav-link" to="/authorSignup">
                כניסה למשיב
              </NavLink>
            </li>    
            <li className="nav-item">
              <NavLink className="nav-link" to="/signin">
>>>>>>> 8c86c5d7fd1878c9053c382964cf3f5720e94fab
                התחבר
              </NavLink>
            </li>
           <li className="nav-item">
<<<<<<< HEAD
              <NavLink className="nav-link" to="signup.jsx">
                הרשם
              </NavLink>
            </li>
=======
              <NavLink className="nav-link" to="/signup">
                הרשם
              </NavLink>
            </li>
            </React.Fragment>
            )
            }
            {/* if user is logged */}
            {user && (
              <React.Fragment>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/logout">
                    Logout
                  </NavLink>
                </li>
              </React.Fragment>
            )}
>>>>>>> 8c86c5d7fd1878c9053c382964cf3f5720e94fab
           </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
