import React from 'react';
import './Services.scss';
import BusinessImage from '../../../static/assets/misc/Opening-Door.jpg';
import ServiceCard from './ServiceCard';
const ServicesBox = () => {
  return (
    <div id="services" className="md-grid">
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
        cover={BusinessImage}
        content="We will meet and greet you at the airport in one of our chauffeur-driven cars or arrange a stylish departure from any one of the many UK airports."
      />
      <ServiceCard
        title="Events"
        subtitle="Events"
        LinkTo="/Events/"
        cover={BusinessImage}
        content="Travel in luxury to an event and really enjoy the whole experience. Choose our Ford Tourneo Custom and we can take up to 8 people. "
      />
      <ServiceCard
        title="Events"
        subtitle="Events"
        LinkTo="/Events/"
        cover={BusinessImage}
        content="Travel in luxury to an event and really enjoy the whole experience. Choose our Ford Tourneo Custom and we can take up to 8 people. "
      />
      <ServiceCard
        title="Weddings"
        subtitle="Weddings"
        LinkTo="/Weddings/"
        cover={BusinessImage}
        content="Make sure you arrive at your wedding in style and book one of our stylish and comfortable cars. Not only relieving you of stress on the day but looking fabulous in the photos too."
      />

      <ServiceCard
        title="Student"
        subtitle="Student"
        LinkTo="/Student/"
        cover={BusinessImage}
        content="
        We provide student chaperone services to give you peace of mind when your child returns to school. We can collect them from a number of UK airports and drive them to their boarding school."
      />
    </div>
  );
};
export default ServicesBox;
