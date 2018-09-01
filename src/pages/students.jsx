import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Students from '../components/Content/Students';
import config from '../../data/SiteConfig';
import PageTransition from 'gatsby-plugin-page-transitions';
class StudentsPage extends Component {
  render() {
    return (
      <PageTransition transitionTime={300}>
        <div className="about-container">
          <Helmet>
            <title>{`About | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/about/`} />
          </Helmet>

          <Students />
        </div>
      </PageTransition>
    );
  }
}

export default StudentsPage;
