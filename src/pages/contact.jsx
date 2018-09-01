import React, { Component } from 'react';
import Helmet from 'react-helmet';
import ContactForm from '../components/Contact/ContactForm';
import config from '../../data/SiteConfig';

class AboutPage extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>{`Contact | ${config.siteTitle}`}</title>
          <link rel="canonical" href={`${config.siteUrl}/contact/`} />
        </Helmet>
        <h1 className="display-3 page-heading text-center">Contact</h1>
        <ContactForm />
      </div>
    );
  }
}

export default AboutPage;
