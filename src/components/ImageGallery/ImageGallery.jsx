import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import Img from "gatsby-image";
import "react-image-gallery/styles/scss/image-gallery.scss";
import "./Gallery.scss";

import Trio from "../../../static/assets/Trio/Trio_with_pillar.jpg";

class ImageGallerys extends React.Component {
  constructor() {
    super();
    this.state = { toShow: "" };
  }
  render() {
    let images;
    switch (this.state.toShow) {
      case "wedding":
        images = [
          {
            original: "http://lorempixel.com/1000/600/nature/1/",
            thumbnail: "http://lorempixel.com/250/150/nature/1/"
          },
          {
            original: "http://lorempixel.com/1000/600/nature/2/",
            thumbnail: "http://lorempixel.com/250/150/nature/2/"
          },
          {
            original: "http://lorempixel.com/1000/600/nature/3/",
            thumbnail: "http://lorempixel.com/250/150/nature/3/"
          }
        ];
        break;

      default:
        console.log(Trio);
        images = [
          {
            original: Trio,
            thumbnail: Trio
          },
          {
            original: "http://lorempixel.com/1000/600/nature/2/",
            thumbnail: "http://lorempixel.com/250/150/nature/2/"
          },
          {
            original: "http://lorempixel.com/1000/600/nature/3/",
            thumbnail: "http://lorempixel.com/250/150/nature/3/"
          }
        ];
        break;
    }

    return <ImageGallery items={images} infinite showFullScreenButton={true} />;
  }
}

export default ImageGallerys;
