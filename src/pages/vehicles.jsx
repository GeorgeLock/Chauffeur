import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Model from '../components/3dModel/Models';
import config from '../../data/SiteConfig';

class AboutPage extends Component {
  render() {
    return (
      <div className="about-container">
        <Helmet>
          <title>{`About | ${config.siteTitle}`}</title>
          <link rel="canonical" href={`${config.siteUrl}/about/`} />
        </Helmet>
        <Model />
      </div>
    );
  }
}

export default AboutPage;
