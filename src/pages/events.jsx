import React, { Component } from "react";
import Helmet from "react-helmet";
import { Grid, Cell } from "react-md";
import LocalEvents from "../components/ApiRequests/LocalEvents";
import config from "../../data/SiteConfig";

class EventsPage extends Component {
  render() {
    return (
      <div className="about-container">
        <Helmet>
          <title>{`About | ${config.siteTitle}`}</title>
          <link rel="canonical" href={`${config.siteUrl}/about/`} />
        </Helmet>
        <h1 className="display-4 text-center">Events</h1>
        <Grid>
          <Cell size={6} desktopOffset={3}>
            <LocalEvents />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default EventsPage;
