import React, { Component } from 'react';
import Helmet from 'react-helmet';

import config from '../../data/SiteConfig';

class VehiclesPage extends Component {
  render() {
    return (
      <div className="about-container">
        <Helmet>
          <title>{`About | ${config.siteTitle}`}</title>
          <link rel="canonical" href={`${config.siteUrl}/about/`} />
        </Helmet>
      </div>
    );
  }
}

export default VehiclesPage;
