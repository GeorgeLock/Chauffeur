import React, { Component } from 'react';
import Helmet from 'react-helmet';
import PageTransition from 'gatsby-plugin-page-transitions';
import config from '../../data/SiteConfig';
import Airports from '../components/Content/Airports';
class AirportsPage extends Component {
  render() {
    return (
      <PageTransition transitionTime={300}>
        <div className="container">
          <Helmet>
            <title>{`About | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/about/`} />
          </Helmet>

          <Airports />
        </div>
      </PageTransition>
    );
  }
}

export default AirportsPage;
