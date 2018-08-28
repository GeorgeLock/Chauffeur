import React, { Component } from "react";
import Label from "./Label";
import {
  TextField,
  DatePicker,
  TimePicker,
  SelectField,
  Button
} from "react-md";
import "./bootstrap.min.css";
import "./ContactForm.scss";

const LabelYesNo = ["Yes", "No"];
const paymentMethods = [
  "Cash",
  "Debit / Credit Card",
  "Paypal",
  "Invoice - BACS"
];
class ContactForm extends Component {
  constructor() {
    super();
    this.state = { checked: false, returnTravel: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleList = this.handleList.bind(this);
  }
  handleChange() {
    this.setState({
      checked: !this.state.checked
    });
  }

  handleList(value) {
    if (value === "Yes") {
      this.setState({ returnTravel: true });
    } else {
      this.setState({ returnTravel: false });
    }
  }

  render() {
    const ReturnDate = this.state.returnTravel ? (
      <DatePicker
        id="return-booking-date"
        label="Select Date of Return"
        className="md-cell md-cell--bottom fadeIn"
        errorText="Please select a return date"
        required
      />
    ) : null;

    const ReturnTime = this.state.returnTravel ? (
      <TimePicker
        id="return-booking-time"
        label="Select return time"
        className="md-cell md-cell--bottom fadeIn"
        errorText="Please select a return time"
        required
      />
    ) : null;

    const ReturnPickup = this.state.returnTravel ? (
      <TextField
        id="return-pickup-location"
        label="Return pickup location"
        lineDirection="center"
        name="Return Pickup Location"
        placeholder=""
        className="md-cell md-cell--bottom fadeIn"
        errorText="Please enter a return pickup location"
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
              type="text"
            />

            <TextField
              id="number-of-passengers"
              label="Number of Passengers"
              lineDirection="center"
              name="Number of Passengers"
              placeholder={1}
              className="md-cell md-cell--bottom"
              errorText="Please select the number of passengers"
              required
              type="number"
            />

            <TextField
              required
              id="email"
              label="Email"
              type="email"
              lineDirection="center"
              name="Email Adress"
              placeholder="example@example.com"
              className="md-cell md-cell--bottom"
              errorText="Please enter a valid email address"
            />
            <TextField
              id="Contact-Number"
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
              id="pickup-location"
              label="Pickup Location"
              lineDirection="center"
              name="Pickup Location"
              placeholder=""
              required
              errorText="Please enter a pickup location"
              className="md-cell md-cell--bottom"
            />

            <TextField
              id="extra-pickup-location"
              label="Extra Pickup Location"
              lineDirection="center"
              name="Extra Pickup Location"
              placeholder=""
              errorText="Please enter a valid phone number"
              className="md-cell md-cell--bottom"
            />
            <TextField
              id="amount-of-luggage"
              label="Amount of Luggage"
              lineDirection="center"
              name="Pickup Location"
              placeholder="10KG"
              required
              errorText="Please enter the number of passengers"
              className="md-cell md-cell--bottom"
            />
            <SelectField
              id="returning"
              label="Return Trip"
              placeholder=""
              className="md-cell"
              menuItems={LabelYesNo}
              required
              value={false}
              onChange={this.handleList}
            />
            {ReturnDate}
            {ReturnTime}
            {ReturnPickup}
            <TextField
              id="dropoff-location"
              label="Dropoff Location"
              lineDirection="center"
              name="Dropoff location"
              placeholder=""
              required
              errorText="Please enter a valid phone number"
              className="md-cell md-cell--bottom"
            />
            <TextField
              id="other-dropoff-locations"
              label="Other dropoff locations"
              lineDirection="center"
              name="Extra dropoff locations"
              placeholder=""
              errorText="Please enter a valid phone number"
              className="md-cell md-cell--bottom"
            />
            <TextField
              id="Price"
              label="Price"
              lineDirection="center"
              name="Price"
              placeholder="£"
              required
              errorText="Please enter a valid phone number"
              className="md-cell md-cell--bottom"
            />
            <SelectField
              id="payment-method"
              label="Payment"
              className="md-cell"
              menuItems={paymentMethods}
              simplifiedMenu={false}
            />
            <Button
              type="submit"
              value="Submit"
              className="md-cell--2 mt-4"
              primary
              raised
            >
              Send
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactForm;
