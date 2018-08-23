import React, { Component } from "react";
import Helmet from "react-helmet";
import ContactForm from "../components/Contact/ContactForm";
import config from "../../data/SiteConfig";
import Airports from "../components/Content/Airports";
class AirportsPage extends Component {
  render() {
    return (
      <div className="about-container">
        <Helmet>
          <title>{`About | ${config.siteTitle}`}</title>
          <link rel="canonical" href={`${config.siteUrl}/about/`} />
        </Helmet>
        <Airports />
      </div>
    );
  }
}

export default AirportsPage;
