import React, { Component } from 'react';
import Helmet from 'react-helmet';
import ImageGallerys from '../components/ImageGallery/ImageGallery';
import config from '../../data/SiteConfig';
import PageTransition from 'gatsby-plugin-page-transitions';
class GalleryPage extends Component {
  render() {
    return (
      <PageTransition transitionTime={300}>
        <div className="container-fluid">
          <Helmet>
            <title>{`Photo Gallery | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/gallery/`} />
          </Helmet>
          <h1 className="display-3 text-center">Photo Gallery</h1>
          <ImageGallerys />
        </div>
      </PageTransition>
    );
  }
}

export default GalleryPage;
