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
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-8 pb-5">
            <form
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              action="#"
              className="contact-form"
            >
              <input type="hidden" name="form-name" value="contact" />
              <TextField
                id="floating-center-title"
                label="Name"
                lineDirection="center"
                name="Passenger Name"
                placeholder="John Doe"
                className="md-cell md-cell--bottom"
              />

              <input
                type="submit"
                value="Submit"
                className="btn btn-primary btn-lg rounded-2 py-2"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactForm;
{
  /* <form

> */
}
