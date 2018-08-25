import React, { Component } from "react";

import { TextField } from "react-md";
import "./ContactForm.scss";

class ContactForm extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    this.setState({
      checked: !this.state.checked
    });
  }

  render() {
    const content = this.state.checked
      ? // <Label
        //   fieldName="Phone"
        //   type="tel"
        //   id="phone"
        //   placeholder="Home / Mobile"
        //   className="pr-2 fas fa-phone text-info"
        //   required
        // />
        null
      : null;

    return (
      <form
        name="contact-form"
        method="POST"
        data-netlify-honeypot="bot-field"
        data-netlify="true"
      >
        <div className="md-grid">
          <p class="hidden">
            <label>
              <input type="hidden" name="bot-field" />
            </label>
          </p>

          <TextField
            id="floating-center-title"
            label="Title"
            lineDirection="center"
            placeholder="Hello World"
            className="md-cell md-cell--bottom"
            name="Name"
          />
          <TextField
            id="floating-multiline"
            label="Email"
            lineDirection="right"
            placeholder="example@example.com"
            className="md-cell md-cell--bottom"
            name="Email"
            type="email"
          />
          <TextField
            id="floating-multiline"
            label="Number of Passengers"
            type="number"
            className="md-cell md-cell--bottom"
            name="Number of Passengers"
            placeholder="1"
          />
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

export default ContactForm;
