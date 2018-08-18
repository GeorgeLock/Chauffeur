import React, { Component } from 'react';
import './Header.scss';
import HeaderImage from '../../../static/assets/misc/Chauffeur_rose.jpg';

class HeaderDefault extends Component {
  componentDidMount() {
    let top = '0';
    let scale;
    const content = document.getElementsByClassName('main-container');
  }
  render() {
    const { localTitle } = this.props;

    if (localTitle === 'Home' || localTitle === 'home') {
      this.top = '0';
      this.scale = 0;
      for (let i = 0; i < content.length; i++) {
        content[i].style.paddingTop = '93vh';
      }
    } else {
      this.top = '-1000px';
      this.scale = 0;
      for (let i = 0; i < content.length; i++) {
        content[i].style.paddingTop = '10vh';
      }
    }
    return (
      <div className="header" style={{ top: this.top, scale: this.scale }}>
        <img
          className="header-image"
          src={HeaderImage}
          alt="Suit Up for chauffeur travel"
        />
      </div>
    );
  }
}

export default HeaderDefault;
