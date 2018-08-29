import React, { Component } from "react";
import Helmet from "react-helmet";
import Students from "../components/Content/Students";
import config from "../../data/SiteConfig";

class StudentsPage extends Component {
  render() {
    return (
      <div className="about-container">
        <Helmet>
          <title>{`About | ${config.siteTitle}`}</title>
          <link rel="canonical" href={`${config.siteUrl}/about/`} />
        </Helmet>

        <Students />
      </div>
    );
  }
}

export default StudentsPage;
