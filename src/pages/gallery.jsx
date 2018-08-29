import React, { Component } from "react";
import Helmet from "react-helmet";
import ImageGallerys from "../components/ImageGallery/ImageGallery";
import config from "../../data/SiteConfig";

class GalleryPage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Helmet>
          <title>{`Photo Gallery | ${config.siteTitle}`}</title>
          <link rel="canonical" href={`${config.siteUrl}/gallery/`} />
        </Helmet>
        <h1 className="display-3 text-center">Photo Gallery</h1>
        <ImageGallerys />
      </div>
    );
  }
}

export default GalleryPage;
