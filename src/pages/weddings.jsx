import React, { Component } from 'react';
import Helmet from 'react-helmet';
import ContactForm from '../components/Contact/ContactForm';
import config from '../../data/SiteConfig';
import PageTransition from 'gatsby-plugin-page-transitions';

class WeddingsPage extends Component {
  render() {
    return (
      <PageTransition transitionTime={300}>
        <div className="about-container">
          <Helmet>
            <title>{`About | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/about/`} />
          </Helmet>
          <ContactForm />
        </div>
      </PageTransition>
    );
  }
}

export default WeddingsPage;
