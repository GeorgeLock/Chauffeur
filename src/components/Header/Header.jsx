import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
  constructor() {
    super();
  }

  render() {
    let className = 'header-image';
    let leftPos = 0;
    switch (this.props.localTitle) {
      case 'Home':
        className += ' home';
        break;

      case 'About':
        className += ' about';

        break;

      default:
        className += ' default';
    }

    return (
      <div className="header">
        <div className={className} />
      </div>
    );
  }
}

export default Header;
