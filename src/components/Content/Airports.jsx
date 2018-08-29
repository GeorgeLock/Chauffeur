import React from "react";
import "./default.scss";
import { Grid, Cell } from "react-md";
import ContactButtons from "../Contact/ContactButtons";
import "../../layouts/animations.css";
const AirportsPage = () => {
  return (
    <div className="container text-sm-center text-md-left">
      <h1 className="display-3 text-center page-heading">Airports</h1>
      <Grid>
        <Cell size={8} className="text-center">
          <h2 className="display-4 page-subheading">Airport Transfers</h2>
          <p className="md-caption">
            Chauffeur Travel's transfer service provides, friendly, reliable and
            professional transport to all UK Airports such as Bristol, Exeter,
            Heathrow, Gatwick, London Stansted, Luton, Birmingham, Southampton
            or Leeds Bradford. Our Chauffeurs will make you feel completely
            relaxed and exquisitely looked after when travelling with us. With
            20 years of experience in passenger transport, our team are well
            placed to deliver high quality levels of service.<br />
            <br /> Our Chauffeurs provide a meet and greet service. Clients will
            receive a text message from our chauffeur confirming our position in
            the arrival lounge. All clients can expect to be greeted with a
            friendly face at the designated arrivals point, by our courteous,
            calm and well presented drivers. Rest assured our chauffeur will
            escort you to our vehicle taking control of your luggage leaving you
            relaxed and ready to enjoy your onward journey.
          </p>
          <Cell size={12}>
            <ContactButtons />
          </Cell>
        </Cell>
      </Grid>
    </div>
  );
};

export default AirportsPage;
