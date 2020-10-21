<<<<<<< HEAD
import React from "react";
import "./App.css";
import NavBar from "./components/navbar.jsx";
/* import QnA from "./components/qna";
import AskForm from "./components/askForm.jsx";
=======
import React, { Component }from "react";
import "./App.css";
import NavBar from "./components/navbar.jsx";
/* import QnA from "./components/qna";
>>>>>>> 8c86c5d7fd1878c9053c382964cf3f5720e94fab
import Qcard from "./components/qcard.jsx"; */
import Footer from "./components/footer.jsx";
import About from "./components/about.jsx";
import Home from "./components/home.jsx";
import Signup from "./components/signup.jsx";
<<<<<<< HEAD
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
=======
import Signin from "./components/signin.jsx";
import { Route , Switch } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AskForm from "./components/askForm";
import userService from "./services/userService";
import Logout from "./components/logout";
import AuthorSignup from "./components/authorSignup";
import CreateCard from "./components/createCard.jsx";
import QnA from "./components/qna";

class App extends Component {
    state = {};
    
    componentDidMount(){
      const user = userService.getCurrentUser();
      this.setState({user})
  
    }
  
    render() {
      const {user} = this.state
  return (
    <div className="d-flex flex-column min-vh-100">
      <ToastContainer/>
      <header>
        <NavBar user={user}/>
      </header>
      <main className="container-fluid flex-fill">
        <Switch>
          <Route path="/logout" component={Logout} />
          <Route path="/create-card" component={CreateCard} />
          <Route path="/AuthorSignup" component={AuthorSignup} />
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
          <Route path="/about" component={About} />
          <Route path="/qna" component={QnA}/>
          <Route path="/askForm" component={AskForm} />
>>>>>>> 8c86c5d7fd1878c9053c382964cf3f5720e94fab
          <Route exact path="/" component={Home} />    
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
<<<<<<< HEAD
=======
  }
>>>>>>> 8c86c5d7fd1878c9053c382964cf3f5720e94fab
}

export default App;
