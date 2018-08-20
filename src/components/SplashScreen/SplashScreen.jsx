import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './Splash.scss';
import logo from '../../../static/svg/Chauffeur_travel_highres_logo.png';

class SplashScreen extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="splash-screen">
        <ReactCSSTransitionGroup
          transitionName="fade"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          <img
            className="center-content"
            src={logo}
            alt="Chauffeur Travel Logo"
          />
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default SplashScreen;
