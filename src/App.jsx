import React from "react";
import "./App.css";
import NavBar from "./components/navbar.jsx";
/* import QnA from "./components/qna";
import AskForm from "./components/askForm.jsx";
import Qcard from "./components/qcard.jsx"; */
import Footer from "./components/footer.jsx";
import About from "./components/about.jsx";
import Home from "./components/home.jsx";
import Signup from "./components/signup.jsx";
import { Route , Switch } from 'react-router-dom';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header>
        <NavBar />
      </header>
      <main className="container-fluid flex-fill">
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/signup" component={Signup} />
          <Route exact path="/" component={Home} />    
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
