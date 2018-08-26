import React, { Component } from "react";
import Helmet from "react-helmet";
import ContactForm from "../components/Contact/ContactForm";
import config from "../../data/SiteConfig";

class AboutPage extends Component {
  render() {
    return (
      <div className="about-container">
        <Helmet>
          <title>{`About | ${config.siteTitle}`}</title>
          <link rel="canonical" href={`${config.siteUrl}/about/`} />
        </Helmet>
        <h1 className="display-3 text-center">Contact</h1>
        <ContactForm />
      </div>
    );
  }
}

export default AboutPage;
