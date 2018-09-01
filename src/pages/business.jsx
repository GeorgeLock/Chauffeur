import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Business from '../components/Content/Business';
import config from '../../data/SiteConfig';
import PageTransition from 'gatsby-plugin-page-transitions';

class BusinessPage extends Component {
  render() {
    return (
      <PageTransition transitionTime={300}>
        <div className="about-container">
          <Helmet>
            <title>{`Business | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/business/`} />
          </Helmet>
          <Business />
        </div>
      </PageTransition>
    );
  }
}

export default BusinessPage;
