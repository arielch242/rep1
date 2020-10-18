import React from "react";
import Form from './common/form.jsx';
import PageHeader from './common/pageHeader';

class AskForm extends Form {
  state = {
    data: {
      name: "",
      email: "",
      title: "",
      topic: "",
      article: "",
    },
    errors:{}
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <PageHeader titleText="AskForm"/>
        </div>
      <section className="container h-100 bg-img">
        <div className="row" style={{direction: "rtl"}}> 
          <div className="col-6 mx-auto">
            <h1 className="text-white text-right">כתוב שאלתך</h1>

            <form
              className="form"
              onSubmit={this.handleSubmit}
            >  
              {this.renderInput('name','שם')}
              {this.renderInput('email','דוא"ל')}
              {this.renderInput('title','כותרת השאלה')}
             
              <div className="form-group m-3">
                <label className="control-label" htmlFor="name"></label>
                <select dir="rtl" name="askTopic" id="askTopic">
                  <option value="daily">ענייני יום יום</option>
                  <option value="mammon">ממונות</option>
                  <option value="kashrot">כשרות</option>
                </select>
              </div>
       
              <textarea className="form-group"
                name="askArticle"
                id="askArticle"
                cols="59"
                rows="5"
                placeholder="?מהי שאלתך"
              ></textarea>
              <div className="form-group col-md-12">
                <label className="control-label" htmlFor="name"></label>
                <input
                  id="askSubmit"
                  name="askSubmit"
                  type="submit"
                  value="שאל את הרב"
                  className="form-control col-8 btn btn-warning text-center ml-auto"
                />
              </div>
            </form>
          </div>
        </div>
      </section>
      </React.Fragment>
    );
  }
}

export default AskForm;
