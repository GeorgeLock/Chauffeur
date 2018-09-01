import React from 'react';
import { Button } from 'react-md';
import './ContactButtons.scss';
import BookingForm from '../../../static/assets/misc/BookingForm.pdf';
const ContactButtons = () => {
  return (
    <div id="contact-buttons">
      <Button raised secondary href={BookingForm} iconClassName="fas fa-user">
        Open an Account
      </Button>
      <Button
        className="mr-3 ml-3"
        href="https://www.chauffeurdrivesystems.com/ClientPortal.aspx?SYS_ID=109"
        raised
        secondary
        iconClassName="fas fa-taxi"
      >
        Make a Booking
      </Button>
      <Button
        raised
        href="/contact"
        secondary
        iconClassName="fas fa-envelope-open"
      >
        Request a Quote
      </Button>
    </div>
  );
};

export default ContactButtons;
