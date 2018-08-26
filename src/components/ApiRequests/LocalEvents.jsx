import React from "react";
import Link from "gatsby-link";
import { Button, Grid, Cell, Card } from "react-md";
import Slider from "react-slick";

import "./Events.scss";

class LocalEvents extends React.Component {
  constructor() {
    super();
    this.state = {
      pictures: [],
      date: [],
      image: [],
      data: []
    };
  }

  componentDidMount() {
    fetch(
      "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=GB&apikey=qsh4V7ZAOJYRaDSd52s2O2uBIxrMmlLo"
    )
      .then(results => {
        return results.json();
      })
      .then(datas => {
        console.log(datas._embedded.events);

        this.setState({ data: datas._embedded.events });

        console.log(this.state.data);
      });
  }

  render() {
    const settings = {
      dots: false,
      arrows: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 15000
    };
    return (
      <div className="event-container">
        <Grid className="">
          <Cell size={12}>
            <Card className="md-block-centered p-5">
              <Slider {...settings}>
                {this.state.data.map(event => (
                  <div key={event.id} className="news-slider ">
                    <h2 className=" md-subheading-1">{event.name}</h2>
                    <h2 className="md-subheading-1">
                      {event._embedded.venues[0].name}
                    </h2>
                    {/* <img className src={event.images[5].url} /> */}
                    <h2 className="md-text-left md-text-capitalize md-subheading-2">
                      {event.classifications[0].genre.name}
                    </h2>
                    <h2 className="md-text-right md-subheading-2">
                      {event.dates.start.localDate
                        .split("-")
                        .reverse()
                        .join("-")}
                    </h2>
                    <Button href={event.url} raised primary target="_blank">
                      View Event
                    </Button>
                    <Button
                      href="/contact"
                      className="ml-3 mt-2"
                      raised
                      primary
                      toolTipLabel="Request a quote for a chauffeur to this event"
                    >
                      Request a Chauffeur
                    </Button>
                  </div>
                ))}
              </Slider>
            </Card>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LocalEvents;
