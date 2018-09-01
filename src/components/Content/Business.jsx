import React from 'react';
import { Grid, Cell, Button } from 'react-md';
import './default.scss';
import ContactButtons from '../Contact/ContactButtons';
import Slider from 'react-slick';
import Horstman from '../../../static/logos/Horstman-Group-Logo-web.jpg';
import Novia from '../../../static/logos/Novia_Financial_plc.jpg';
import SJGB from '../../../static/logos/SJGB_Logo_signature.jpg';
import Unividual from '../../../static/logos/Unividual.jpg';
import AbbeyHotel from '../../../static/logos/ABBEY-HOTEL-LOGO-BLACK.jpg';
import ApsleyHouse from '../../../static/logos/ApsleyHouse.jpg';
import Forward from '../../../static/logos/Forward-goyourownway.jpg';

const Business = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    fade: true,
    centerMode: false
  };
  return (
    <div className="container text-sm-center text-md-left">
      <h1 className="display-3 text-center page-heading">Business</h1>
      <Grid className="">
        <Cell size={12}>
          <p className="md-caption text-center">
            Whether you need a personal chauffeur for your Executive team, want
            to impress your clients or need a year round service for regular
            business travellers, Chauffeur Travel can provide you with a first
            class service. We pride ourselves on being able to offer relaxing,
            efficiently planned journeys across the UK.<br />
            <br /> Our expert drivers are selected and trained to accommodate
            the needs and discretion of our valued clientele. We have a fleet of
            luxury vehicles to cater for individuals to large groups and offer a
            complete transport management service and optional extras.
          </p>
        </Cell>
      </Grid>
      <div className="content-main">
        <Grid>
          <Cell size={7} phoneSize={12} tabletSize={12}>
            <h2 className="display-4 page-subheading">
              Our new booking system
            </h2>
            <ul className="md-caption">
              <li>Local Office Base – Member of Staff at office to assist.</li>
              <br />
              <li>
                Company Booking Portal – Individual login &amp; Booking System –
                Training provided. Remotely or in person.
              </li>
              <br />
              <li>You may have as many or few bookers as you require</li>
              <br />
              <li>Ability to view all bookings, by all bookers</li>
              <br />
              <li>Assign jobs to certain projects.</li>
              <br />
              <li>
                Booking confirmations sent to bookers and travelling passengers
              </li>
              <br />
              <li>
                Bookers App – Booker can track each individual transfer if
                required
              </li>
              <br />
              <li>
                Notifications to Traveller - Driver details, Text / Email 1hour
                prior to arrival &amp; Text / Email Upon Driver Arrival
              </li>
              <br />
              <li>
                Select Vehicle type depending on your company requirements – CEO
                Level or Entry Staff Member Levels
              </li>
              <br />
              <li>
                All Vehicles Tracked with RAC Telematics – live Vehicle
                locations, Traffic &amp; Accidents Notifications, Driver Scoring
                etc…
              </li>
              <br />
              <li>Competitive Rates</li>
            </ul>
            <Cell className="mt-5" size={12} tabletSize={12}>
              <ContactButtons />
            </Cell>
          </Cell>
          <Cell size={4} desktopOffset={1} tabletSize={12}>
            <h2 className="display-4 page-subheading">Some of our Clients</h2>
            <Cell size={12}>
              <Slider {...settings}>
                <img
                  className="img-logo"
                  src={Horstman}
                  alt="Chauffeur travel client Horstman"
                />
                <img
                  className="img-logo  mr-3 ml-3"
                  src={Novia}
                  alt="Chauffeur travel client Novia Financial"
                />
                <img
                  className="img-logo"
                  src={SJGB}
                  alt="Chauffeur travel client Sailor Jerry"
                />

                <img
                  className="img-logo"
                  src={Unividual}
                  alt="Chauffeur travel client Unividual"
                />
                <img
                  className="img-logo"
                  src={ApsleyHouse}
                  alt="Chauffeur travel client Apsley House"
                />
                <img
                  className="img-logo"
                  src={Forward}
                  alt="Chauffeur travel client Forward"
                />
                <img
                  className="img-logo"
                  src={AbbeyHotel}
                  alt="'Chauffeur Travel client Abbey Hotel"
                />
              </Slider>
            </Cell>
          </Cell>
        </Grid>
        <Grid />
      </div>
    </div>
  );
};

export default Business;
