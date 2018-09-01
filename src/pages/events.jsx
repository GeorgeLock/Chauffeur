import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Grid, Cell } from 'react-md';
import LocalEvents from '../components/ApiRequests/LocalEvents';
import config from '../../data/SiteConfig';
import PageTransition from 'gatsby-plugin-page-transitions';

class EventsPage extends Component {
  render() {
    return (
      <PageTransition transitionTime={300}>
        <div className="container">
          <Helmet>
            <title>{`About | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/about/`} />
          </Helmet>
          <h1 className="display-3 text-center page-heading">Events</h1>
          <div className="content-main">
            <Grid>
              <Cell size={12}>
                <p className="md-caption text-center">
                  Chauffeur Travel can provide luxury transport to all events
                  within the UK. We understand all events are different and
                  demand different requirements. Quite often attending an event
                  is planned a long-time in advance and must be perfect.
                  Chauffeur Travel work with clients in organising dates, times,
                  group sizes and special requirements to make the day extra
                  special. We are particulary interested in understanding the
                  brief and taking all the stress out of planning / organising
                  your event.
                </p>
              </Cell>
            </Grid>
          </div>
          <div className="content-aside">
            <Grid>
              <Cell size={12}>
                <h2 classname="display-4 text-center page-subheading">
                  What we do
                </h2>
                <ul>
                  <li>Arrive on Time.</li>
                  <li>Choose Optimum Route.</li>
                  <li>
                    Supply Dedicated Chauffeur &amp; Vehicle for Duration of
                    Event.
                  </li>
                  <li>Are Versatile Should Plans Change.</li>
                  <li>Provide Classic Hampers upon request. </li>
                  <li>Full Discretion and Confidentiality.</li>
                </ul>
              </Cell>
            </Grid>
          </div>
          <Grid>
            <Cell size={8} desktopOffset={2}>
              <h2 className="display-4 page-subheading">Ticketmaster Events</h2>
              <LocalEvents />
            </Cell>
          </Grid>
        </div>
      </PageTransition>
    );
  }
}

export default EventsPage;
