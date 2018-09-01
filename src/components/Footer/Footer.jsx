import React, { Component } from 'react';
import { FontIcon } from 'react-md';
import UserLinks from '../UserLinks/UserLinks';
import config from '../../../data/SiteConfig';
import './Footer.scss';
import ContactForm from '../Contact/ContactForm';
import ServicesBox from '../Services/ServicesBox';
class Footer extends Component {
  constructor() {
    super();
    this.state = { showContact: false };
  }

  render() {
    const url = config.siteRss;
    const { userLinks } = this.props;
    const { copyright, fixedFooter } = config;

    if (!copyright) {
      return null;
    }
    return (
      <div>
        <div className="container">
          <ServicesBox />
        </div>
        <footer className={fixedFooter ? 'footer footer-fixed' : 'footer'}>
          {userLinks ? <UserLinks config={config} labeled /> : null}
          <div className="notice-container container md-grid">
            <div className="rss" />
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
