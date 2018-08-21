import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons';
import UserLinks from '../UserLinks/UserLinks';
import config from '../../../data/SiteConfig';
import './Footer.scss';
import ContactForm from '../Contact/ContactForm';

class Footer extends Component {
  constructor(){
    super();
    this.state = {showContact: false};
    this.updateContact = this.updateContact.bind(this);
  }

  updateContact(){
    this.state.showContact = !this.state.showContact;
  }
  render() {
    const url = config.siteRss;
    const { userLinks } = this.props;
    const { copyright, fixedFooter } = config;
    const ContactForm = null;
    const Button = <Button/>
    if(this.state.showContact){
      ContactForm = <ContactForm />
      Button = null;
    }

    if (!copyright) {
      return null;
    }
    return (
      <footer className={fixedFooter ? 'footer footer-fixed' : 'footer'}>
        {userLinks ? <UserLinks config={config} labeled /> : null}
        <div className="notice-container">
          <Button floating onClick='updateContact'>Contact Us</Button>
          <ContactForm />
          <div className="rss" />
        </div>
      </footer>
    );
  }
}

export default Footer;
