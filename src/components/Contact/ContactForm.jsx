import React, { Component } from "react";
import Label from "./Label";
import { TextField, DatePicker, TimePicker, SelectField } from "react-md";
import "./bootstrap.min.css";
import "./ContactForm.scss";

class ContactForm extends Component {
  constructor() {
    super();
    this.state = { checked: false, return: "no" };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    this.setState({
      checked: !this.state.checked
    });
  }
  isKG(text) {
    return (text += this.state.KG);
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
          action="#"
          className="contact-form"
        >
          <div className="md-grid">
            <input type="hidden" name="form-name" value="contact" />

            <TextField
              id="floating-center-title"
              label="Name"
              lineDirection="center"
              name="Passenger Name"
              placeholder="John Doe"
              className="md-cell md-cell--bottom"
              errorText="Please enter your full name"
              required
            />

            <TextField
              required
              id="floating-center-title"
              label="Email"
              type="email"
              lineDirection="center"
              name="Email Adress"
              placeholder="example@example.com"
              className="md-cell md-cell--bottom"
              errorText="Please enter a valid email address"
            />
            <TextField
              id="floating-center-title"
              label="Phone"
              type="tel"
              lineDirection="center"
              name="Contact Number"
              placeholder=""
              required
              errorText="Please enter a valid phone number"
              className="md-cell md-cell--bottom"
            />
            <DatePicker
              id="booking-date"
              label="Select date of travel"
              className="md-cell"
              errorText="Please select a travel date"
              required
            />

            <TimePicker
              id="booking-time"
              label="Select time of travel"
              className="md-cell"
              errorText="Please select a travel time"
              required
            />
            <TextField
              id="floating-center-title"
              label="Pickup Location"
              lineDirection="center"
              name="Pickup Location"
              placeholder=""
              required
              errorText="Please enter a pickup location"
              className="md-cell md-cell--bottom"
            />

            <TextField
              id="floating-center-title"
              label="Extra Pickup Location"
              lineDirection="center"
              name="Extra Pickup Location"
              placeholder=""
              required
              errorText="Please enter a valid phone number"
              className="md-cell md-cell--bottom"
            />
            <TextField
              id="floating-center-title"
              label="Amount of Luggage"
              lineDirection="center"
              name="Pickup Location"
              placeholder="10KG"
              required
              errorText="Please enter a valid phone number"
              className="md-cell md-cell--bottom"
            />
            <SelectField
              id="returning"
              label="Return Trip"
              placeholder=""
              className="md-cell"
              menuItems={["Yes", "No"]}
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary btn-lg rounded-2 py-2"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default ContactForm;
