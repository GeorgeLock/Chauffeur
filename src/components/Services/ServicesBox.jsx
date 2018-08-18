import React from 'react';
import './services.scss';

import BusinessImage from '../../../static/assets/misc/Opening-Door.jpg';

const ServicesBox = () => {
  return (
    <div id="services">
      <div className="row">
        <div className="col-md-6 col-lg-4  text-center padding-bottom--md">
          <h4 className="service-heading">Business</h4>
          <img
            src={BusinessImage}
            alt="Chauffeur Travel Bath offers business contracts"
          />
          <p>
            We can offer airport transfers, contracts for business travel,
            corporate travel and provide complete tour and event packages for
            single or multiple locations.
          </p>
        </div>
        <div className="col-md-6 col-lg-4 text-center padding-bottom--md">
          <h4 className="service-heading">Airports</h4>
          <img src="" alt="service 1" />
          <p>
            We can offer airport transfers, contracts for business travel,
            corporate travel and provide complete tour and event packages for
            single or multiple locations.
          </p>
        </div>
        <div className="col-md-6 col-lg-4 text-center padding-bottom--md">
          <h4 className="service-heading">Events</h4>
          <img src="" alt="service 1" />
          <p>
            We can offer airport transfers, contracts for business travel,
            corporate travel and provide complete tour and event packages for
            single or multiple locations.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 text-center padding-bottom--md">
          <h4 className="service-heading">Weddings</h4>
          <img src="" alt="service 1" />
          <p>
            We can offer airport transfers, contracts for business travel,
            corporate travel and provide complete tour and event packages for
            single or multiple locations.
          </p>
        </div>
        <div className="col-md-6 text-center padding-bottom--md">
          <h4 className="service-heading">Student Chaperone</h4>
          <img src="" alt="service 1" />
          <p>
            We can offer airport transfers, contracts for business travel,
            corporate travel and provide complete tour and event packages for
            single or multiple locations.
          </p>
        </div>
      </div>
    </div>
  );
};
export default ServicesBox;
