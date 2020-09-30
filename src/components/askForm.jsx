import React, { Component } from "react";

class AskForm extends Component {
  state = {};
  render() {
    return (
      <section className="h-100 bg-img">
        <form className="form-horizontal mt-3 ">
          <div class="form-group">
            <label class="md-4 control-label" for="name"></label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="איך קוראים לך?"
              class="form-control input-md"
            />
            <label class="md-4 control-label" for="email"></label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="מה המייל שלך?"
              class="form-control input-md"
            />
          </div>
        </form>
      </section>
    );
  }
}

export default AskForm;
