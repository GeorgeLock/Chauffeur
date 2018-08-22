import React, { Component } from 'react';
import {Avatar} from 'react-md';
import config from '../../../data/SiteConfig';
import './About.scss';
import James from '../../../static/assets/Team/James-Oneill.jpg'

class About extends Component {
  render() {
    return (
      <div className="">
        
          <div className="md-grid-12 md-text-center">
            <h1 className="display-3">Meet the Team</h1>
          </div>
          <div className="md-grid">
          <div className="md-cell-6">
            <img className="img-thumb" src={James} alt="Chauffeur Travel Owner James O'neill"/>
            <h2 className="md-subheading-2">James O'Neill</h2>
          </div>
          </div>
        
      </div>
    );
  }
}

export default About;
