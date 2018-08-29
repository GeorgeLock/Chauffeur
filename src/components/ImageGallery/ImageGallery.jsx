import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import Img from "gatsby-image";
import "react-image-gallery/styles/scss/image-gallery.scss";
import "./Gallery.scss";

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
        images = [
          {
            original: "https://picsum.photos/200/300",
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
    }

    return (
      <ImageGallery
        className=""
        items={images}
        infinite
        showFullScreenButton={true}
      />
    );
  }
}

export default ImageGallerys;
