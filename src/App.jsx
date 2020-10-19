import React, { Component }from "react";
import "./App.css";
import NavBar from "./components/navbar.jsx";
/* import QnA from "./components/qna";
import Qcard from "./components/qcard.jsx"; */
import Footer from "./components/footer.jsx";
import About from "./components/about.jsx";
import Home from "./components/home.jsx";
import Signup from "./components/signup.jsx";
import Signin from "./components/signin.jsx";
import { Route , Switch } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AskForm from "./components/askForm";
import userService from "./services/userService";
import Logout from "./components/logout";
import AuthorSignup from "./components/authorSignup";
import CreateCard from "./components/createCard.jsx";

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
          <Route path="/askForm" component={AskForm} />
          <Route exact path="/" component={Home} />    
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
  }
}

export default App;
