import React, { Component } from 'react';
import Label from './Label';

import './bootstrap.min.css';
import './ContactForm.scss';

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
              <div className="card border-primary">
                <div className="card-header p-0">
                  <div className="bg-primary text-white text-center py-2">
                    <h3>
                      <i className="fa fa-envelope" /> Request a Quote
                    </h3>
                  </div>
                </div>
                <div className="card-body p-4">
                  <div className="form-group">
                    <Label
                      fieldName="Passenger Name"
                      type="text"
                      id="name"
                      placeholder="John Doe"
                      className="pr-2 fas fa-user text-info"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <Label
                      fieldName="Email"
                      type="email"
                      id="email"
                      placeholder="example@example.com"
                      className="pr-2 fas fa-envelope-open text-info"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <Label
                      fieldName="Phone"
                      type="tel"
                      id="phone"
                      placeholder="Home / Mobile"
                      className="pr-2 fas fa-phone text-info"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <Label
                      fieldName="Number of passengers"
                      type="number"
                      id="passengers"
                      placeholder="Home / Mobile"
                      className="pr-2 fas fa-phone text-info"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <Label
                      fieldName="Number of passengers"
                      type="date"
                      id="passengers"
                      placeholder="Home / Mobile"
                      className="pr-2 fas fa-phone text-info"
                      required
                    />
                    <Label
                      fieldName="Number of passengers"
                      type="time"
                      id="passengers"
                      placeholder="Home / Mobile"
                      className="pr-2 fas fa-phone text-info"
                      required
                    />
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={this.state.checked}
                      onChange={this.handleChange}
                    />
                    <label>Flight</label>
                  </div>
                  <div className="form-group">{content}</div>
                  <div className="text-center">
                    <input
                      type="submit"
                      value="Submit"
                      className="btn btn-primary btn-lg rounded-2 py-2"
                    />
                  </div>
                </div>
              </div>
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
