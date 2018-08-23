import React from "react";
import { Grid, Cell, Button } from "react-md";
import "./default.scss";
import ContactButtons from "../Contact/ContactButtons";

import Horstman from "../../../static/logos/Horstman-Group-Logo-web.jpg";
import Novia from "../../../static/logos/Novia_Financial_plc.jpg";
import SJGB from "../../../static/logos/SJGB_Logo_signature.jpg";
import Unividual from "../../../static/logos/Unividual.jpg";
import AbbeyHotel from "../../../static/logos/ABBEY-HOTEL-LOGO-BLACK.jpg";
import ApsleyHouse from "../../../static/logos/ApsleyHouse.jpg";
import Forward from "../../../static/logos/Forward-goyourownway.jpg";

const Business = () => {
  return (
    <div className="container text-sm-center text-md-left">
      <h1 className="display-3 text-center">Business</h1>
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
            <h2 className="display-4">Our new booking system</h2>
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
          <Cell size={5} tabletSize={12}>
            <h2 className="display-4">Some of our Clients</h2>
            <Cell size={12}>
              <img
                className="img-fluid"
                src={Horstman}
                alt="Chauffeur travel client Horstman"
              />
              <img
                className="img-fluid  mr-3 ml-3"
                src={Novia}
                alt="Chauffeur travel client Novia Financial"
              />
              <img
                className="img-fluid"
                src={SJGB}
                alt="Chauffeur travel client Sailor Jerry"
              />

              <img
                className="img-fluid"
                src={Unividual}
                alt="Chauffeur travel client Unividual"
              />
              <img
                className="img-fluid"
                src={ApsleyHouse}
                alt="Chauffeur travel client Apsley House"
              />
              <img
                className="img-fluid"
                src={Forward}
                alt="Chauffeur travel client Forward"
              />
              <img
                className="img-fluid"
                src={AbbeyHotel}
                alt="'Chauffeur Travel client Abbey Hotel"
              />
            </Cell>
          </Cell>
        </Grid>
        <Grid />
      </div>
    </div>
  );
};

export default Business;
