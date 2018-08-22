import React, { Component } from 'react';
import Helmet from 'react-helmet';
import ContactForm from '../components/Contact/ContactForm';
import config from '../../data/SiteConfig';

class TestimonialsPage extends Component {
  render() {
    return (
      <div className="about-container">
        <Helmet>
          <title>{`Testimonials | ${config.siteTitle}`}</title>
          <link rel="canonical" href={`${config.siteUrl}/testimonials/`} />
        </Helmet>
        
       
      </div>
    );
  }
}

export default TestimonialsPage;
