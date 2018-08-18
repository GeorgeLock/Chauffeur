import React, { Component } from 'react';
import './Header.scss';
import HeaderImage from '../../../static/assets/misc/Chauffeur_rose.jpg';

class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="header" ref="head">
        <img
          className="header-image"
          src={HeaderImage}
          alt="Suit Up for chauffeur travel"
        />
      </div>
    );
  }

  componentWillUnmount() {}
}

export default Header;
