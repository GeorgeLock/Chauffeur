import React from 'react';
import './Services.scss';
import { Grid } from 'react-md';
import BusinessImage from '../../../static/assets/misc/Opening-Door.jpg';
import WeddingImage from '../../../static/assets/misc/Wedding.jpg';
import EventImage from '../../../static/assets/misc/Event.jpg';
import StudentImage from '../../../static/assets/misc/Student.jpg';
import AirportImage from '../../../static/assets/misc/Airport.jpg';
import LuxuryImage from '../../../static/assets/misc/Luxury.jpg';
import ServiceCard from './ServiceCard';
const ServicesBox = () => {
  return (
    <div id="services">
      <h2 className="page-subheading display-4 text-center">Services</h2>
      <Grid>
        <ServiceCard
          title="Business"
          subtitle="Business"
          LinkTo="/Business/"
          cover={BusinessImage}
          content=" We can offer airport transfers, contracts for business travel,
        corporate travel and provide complete tour and event packages for
        single or multiple locations."
        />
        <ServiceCard
          title="Airports"
          subtitle="Airports"
          LinkTo="/Airports/"
          cover={AirportImage}
          content="We will meet and greet you at the airport in one of our chauffeur-driven cars or arrange a stylish departure from any one of the many UK airports."
        />
        <ServiceCard
          title="Events"
          subtitle="Events"
          LinkTo="/Events/"
          cover={EventImage}
          content="Travel in luxury to an event and really enjoy the whole experience. Choose our Ford Tourneo Custom and we can take up to 8 people. "
        />

        <ServiceCard
          title="Student"
          subtitle="Student"
          LinkTo="/Student/"
          cover={StudentImage}
          content="Travel in luxury to an event and really enjoy the whole experience. Choose our Ford Tourneo Custom and we can take up to 8 people. "
        />
        <ServiceCard
          title="Weddings"
          subtitle="Weddings"
          LinkTo="/Weddings/"
          cover={WeddingImage}
          content="Make sure you arrive at your wedding in style and book one of our stylish and comfortable cars. Not only relieving you of stress on the day but looking fabulous in the photos too."
        />

        <ServiceCard
          title="Little Luxuries"
          subtitle="Luxuries"
          LinkTo="/Contact/"
          cover={LuxuryImage}
          content="
        At Chauffeur Travel we offer much more than just your transport...why not order a sandwich, newspaper, water or even a bottle of bubbly?"
        />
      </Grid>
    </div>
  );
};
export default ServicesBox;
