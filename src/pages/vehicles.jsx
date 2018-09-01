import React, { Component } from 'react';
import Helmet from 'react-helmet';
import PageTransition from 'gatsby-plugin-page-transitions';
import config from '../../data/SiteConfig';

class VehiclesPage extends Component {
  render() {
    return (
      <PageTransition transitionTime={300}>
        <div className="about-container">
          <Helmet>
            <title>{`About | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/about/`} />
          </Helmet>
        </div>
      </PageTransition>
    );
  }
}

export default VehiclesPage;
