import React, { Component } from "react";

class AskForm extends Component {
  state = {
    data: {
      qName: "",
      qEmail: "",
      qTitle: "",
      qTopic: "",
      qArticle: "",
    },
  };

  handleChange = (e) => {
    console.log(e);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  render() {
    return (
      <section className="h-100 bg-img">
        <div className="row">
          <div className="col-6 mx-auto">
            <h1 className="text-white text-center">כתוב שאלתך</h1>

            <form
              className="form-inline justify-content-end"
              onSubmit={this.handleSubmit}
            >
              <div className="form-group m-3">
                <label className="control-label" htmlFor="email"></label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  placeholder="?מה המייל שלך"
                  className="form-control input-md text-right"
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-group m-3">
                <label className="control-label" htmlFor="name"></label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="?איך קוראים לך"
                  className="form-control input-md text-right"
                />
              </div>
              <div className="form-group m-3">
                <label className="control-label" htmlFor="name"></label>
                <select dir="rtl" name="askTopic" id="askTopic">
                  <option value="daily">יום יום</option>
                  <option value="mammon">ממונות</option>
                  <option value="kashrot">כשרות</option>
                </select>
              </div>
              <div className="form-group m-3">
                <label className="control-label" htmlFor="name"></label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="נושא השאלה"
                  className="form-control input-md text-right"
                />
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
    );
  }
}

export default AskForm;
