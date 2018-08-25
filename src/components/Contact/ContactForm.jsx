import React, { Component } from "react";
import Label from "./Label";
import { TextField } from "react-md";

import "./bootstrap.min.css";
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
    const content = this.state.checked ? (
      <Label
        fieldName="Phone"
        type="tel"
        id="phone"
        placeholder="Home / Mobile"
        className="pr-2 fas fa-phone text-info"
        required
      />
    ) : null;

    return (
      <div id="contact" className="container pt-5">
        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <div className="md-grid">
            <TextField
              id="floating-center-title"
              label="Title"
              lineDirection="center"
              placeholder="Hello World"
              className="md-cell md-cell--bottom"
            />
            <TextField
              id="floating-multiline"
              label="Type many letters"
              lineDirection="right"
              rows={2}
              placeholder="Hello World"
              className="md-cell md-cell--bottom"
            />
            <TextField
              id="floating-multiline"
              label="Enter your password"
              type="number"
              className="md-cell md-cell--bottom"
            />
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default ContactForm;
{
  /* <form

> */
}
