import React, { Component } from 'react';
import Slider from 'react-slick';
import { Button, Paper } from 'react-md';
import './TestimonialSlider.scss';
import 'react-slick/';
class TestimonialSlider extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 15000,
      fade: true,
      centerMode: false
    };
    return (
      <section id="testimonial">
        <section className="">
          <div id="" className="text-center">
            <Slider {...settings}>
              {this.props.testimonialEdges.map(testimonial => (
                <div key={testimonial.id} className="testimonial-slider ">
                  <h2 className="text-center">
                    {testimonial.node.frontmatter.title}
                  </h2>
                  <div
                    className="text-center"
                    dangerouslySetInnerHTML={{ __html: testimonial.node.html }}
                  />
                </div>
              ))}
            </Slider>
            <Button
              className=""
              href="/contact/"
              raised
              secondary
              iconClassName="fas fa-envelope-open"
            >
              Contact Us
            </Button>
          </div>
        </section>
      </section>
    );
  }
}

export default TestimonialSlider;
