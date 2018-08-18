import React from 'react';
import './bootstrap.min.css';
import './ContactForm.scss';
const ContactForm = () => {
  return (
    <div id="contact" className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-8 pb-5">
          <form action="" className="contact-form">
            <div className="card border-primary">
              <div className="card-header p-0">
                <div className="bg-primary text-white text-center py-2">
                  <h3>
                    <i className="fa fa-envelope" /> Request a Quote
                  </h3>
                </div>
              </div>
              <div className="card-body p-3">
                <div className="form-group">
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="pr-2 fa fa-user text-info" />
                        Name:
                      </div>
                    </div>
                    <input
                      type="text"
                      className="form-control wd-50"
                      id="first-name"
                      name="first-name"
                      placeholder="John"
                      required
                    />
                    <input
                      type="text"
                      className="form-control wd-50"
                      id="last-name"
                      name="last-name"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="pr-2 fa fa-envelope text-info" />
                        Email:
                      </div>
                    </div>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="example@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="pr-2 fa fa-envelope text-info" />
                        Phone:
                      </div>
                    </div>
                    <input
                      type="phone"
                      className="form-control"
                      id="phone"
                      name="phone"
                      placeholder="Mobile / Home"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="pr-2 fa fa-comment text-info" />
                        Comments
                      </div>
                    </div>
                    <textarea
                      className="form-control center"
                      placeholder="Comments and Enquiries"
                      required
                    />
                  </div>
                </div>

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
};

export default ContactForm;
{
  /* <form
name="contact"
method="post"
data-netlify="true"
data-netlify-honeypot="bot-field"
action="#"
> */
}
