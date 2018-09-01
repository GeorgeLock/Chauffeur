import React, { Component } from 'react';
import Helmet from 'react-helmet';
import ContactForm from '../components/Contact/ContactForm';
import config from '../../data/SiteConfig';
import PageTransition from 'gatsby-plugin-page-transitions';

class AboutPage extends Component {
  render() {
    return (
      <PageTransition transitionTime={300}>
        <div>
          <Helmet>
            <title>{`Contact | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/contact/`} />
          </Helmet>
          <h1 className="display-3 page-heading text-center">Contact</h1>
          <ContactForm />
        </div>
      </PageTransition>
    );
  }
}

export default AboutPage;
