import React, { Component } from 'react';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';
import Media, { MediaOverlay } from 'react-md/lib/Media';
import Card from 'react-md/lib/Cards/Card';
import Link from 'gatsby-link';
import './Services.scss';
class ServiceCard extends Component {
  render() {
    return (
      <Card
        raise
        className="md-cell md-cell--3 md-cell--6-tablet md-cell--8-phone"
      >
        <Link className="category-link" to={this.props.LinkTo}>
          <Media>
            <img
              src={this.props.cover}
              alt={`Chauffeur Travel ${this.props.title}`}
            />
            <MediaOverlay>
              <CardTitle title={this.props.title} />
            </MediaOverlay>
          </Media>
          <CardText>
            <p>{this.props.content}</p>
          </CardText>
        </Link>
      </Card>
    );
  }
}

export default ServiceCard;
