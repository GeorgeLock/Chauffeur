import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
  constructor() {
    super();
    this.state = {className: 'header-image default'};
  }

  render() {
   
    switch (this.props.localTitle) {
      case 'Home':
        this.state.className = 'header-image home';
        break;

      case 'About':
        this.state.className = 'header-image about';

        break;

      default:
        this.state.className = 'header-image default';
    }

    return (
      <div className="header">
        <div className={this.state.className} />
      </div>
    );
  }
}

export default Header;
