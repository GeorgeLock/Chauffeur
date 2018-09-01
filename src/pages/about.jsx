import React, { Component } from 'react';
import Helmet from 'react-helmet';
import About from '../components/About/About';
import config from '../../data/SiteConfig';
import PageTransition from 'gatsby-plugin-page-transitions';

class AboutPage extends Component {
  render() {
    return (
      <PageTransition transitionTime={300}>
        <div className="container">
          <Helmet>
            <title>{`About | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/about/`} />
          </Helmet>
          <About />
        </div>
      </PageTransition>
    );
  }
}

export default AboutPage;
