import React from "react";

import ScrollAnimation from "react-animate-on-scroll";
import "./default.scss";
import "../../layouts/animations.css";
import BusinessImage from "../../../static/assets/misc/business.jpg";
import AwardImage from "../../../static//logos/QSI-award.jpg";
const Home = () => {
  return (
    <div className="container text-sm-center text-md-left">
      <div className="row">
        <div className="col-md-12">
          <h1 className="display-3 text-center">Welcome to Chauffeur Travel</h1>
        </div>

        <div className="content-main">
          <div className="row">
            <div className="image-container col-lg-5">
              <img
                className="img-responsive d-md-none d-lg-block"
                src={BusinessImage}
                alt="Business Image"
              />
            </div>
            <div className="col-lg-7">
              <ScrollAnimation animateIn="bounceInRight" animateOnce>
                <h2 className="display-4">Reliable Chauffeur Travel</h2>

                <p className="md-caption">
                  Chauffeur Travel specialise in chauffeur driven car hire for
                  businesses, music tours, VIP events, weddings, special
                  occasions and airport transfers.<br />
                  <br /> Priding ourselves in excellence, our fleet of
                  Mercedes-Benz executive vehicles are immaculate and our highly
                  trained, charcoal suited chauffeurs offer safe, reliable
                  travel to anywhere in the UK.
                  <br />
                  <br />
                  We also offer optional extras, such as a newspaper of your
                  choice, gourmet sandwiches or even a glass of wine to help you
                  relax on your journey.<br />
                  <br />
                  <strong>
                    We don't just drive you to your destination but we provide a
                    luxurious experience as well.
                  </strong>
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
        <div className="content-aside">
          <div className="row">
            <div className="col-md-8">
              <h2 className="display-4">Professional Driver QSi Awards 2017</h2>
              <p className="md-caption">
                Bath-based chauffeur company has won a prestigious award in the
                UK’s only national awards for the private hire, taxi and
                chauffeur sector. Chauffeur Travel took Bronze in the Chauffeur
                Operator (1-10 vehicles) category at the 2017 Professional
                Driver QSi Awards Professional Driver Editor Mark Bursa said:<br />
                <br />
                <em>
                  “Chauffeur Travel is a family-run chauffeur firm based in Bath
                  that has posted impressive growth year-on-year without
                  compromising a meticulous approach to service. The company’s
                  principal listens to his customers too, saying ‘we take on any
                  negatives and turn them into positives’.
                </em>” - <strong> Professional Driver Editor Mark Bursa</strong>
                <br />
                <br />
                <em>
                  “We are very proud recipients of ‘Bronze Award’, for Small
                  Chauffeuring Operator within the UK. The Chauffeuring Industry
                  is a competitive market, so to be nominated for this category
                  was fantastic. We pride ourselves in delivering high
                  standards, consistently. This is a difficult challenge as
                  there are many moving factors which can derail schedules.
                  Behind the scenes our team with the aids of technology work
                  tirelessly to manage the day to day challenges which present
                  themselves.We would therefore like to thank our team of
                  drivers and administration staff for all the hard work
                  throughout the year. All the hard work has paid off, when
                  winning an award of this stature. We would also like to thank
                  our clients for there loyalty and continued support. Without
                  our clients we would have no business. Looking forward to
                  another positive year"
                </em>
                - <strong> Managing Director - James O’Neill</strong>
              </p>
            </div>

            <div className="col-md-4">
              <img
                className="img-small"
                src={AwardImage}
                alt="Chauffeur Travel QSI award"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
