import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Business from '../components/Content/Business'
import config from '../../data/SiteConfig';

class BusinessPage extends Component {
  render() {
    return (
      <div className="about-container">
        <Helmet>
          <title>{`Business | ${config.siteTitle}`}</title>
          <link rel="canonical" href={`${config.siteUrl}/business/`} />
        </Helmet>
        <Business />
       
      </div>
    );
  }
}

export default BusinessPage;
