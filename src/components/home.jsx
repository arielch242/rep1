import React, { Component }from "react";
import PageHeader from './common/pageHeader';

class Home extends Component {
  state = {
  };

  render() {
    return (
      <React.Fragment>
        <div className="container bg-img min-vh-100 text-white text-right my-5">
          <PageHeader titleText="Home"/>
          <h1 className="display-4">ברוכים הבאים לאתר המקוון שאלות ותשובות של בית ההוראה נחלי צדק</h1>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
