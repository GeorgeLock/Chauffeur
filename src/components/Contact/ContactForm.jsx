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
      <div id="contact">
        <form
          name="contact-form"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="#"
          className="contact-form"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="md-grid">
            <TextField
              id="floating-center-title"
              label="Passenger Name"
              lineDirection="center"
              placeholder="John Doe"
              name="Name"
              className="md-cell md-cell--bottom"
            />
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
