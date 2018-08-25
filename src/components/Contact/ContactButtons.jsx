import React from "react";
import { Button } from "react-md";
import BookingForm from "../../../static/assets/misc/BookingForm.pdf";
const ContactButtons = () => {
  return (
    <div>
      <Button raised primary href={BookingForm} iconClassName="fas fa-user">
        Open an Account
      </Button>
      <Button
        className="mr-3 ml-3"
        href="https://www.chauffeurdrivesystems.com/ClientPortal.aspx?SYS_ID=109"
        raised
        primary
        iconClassName="fas fa-taxi"
      >
        Make a Booking
      </Button>
      <Button
        raised
        href="/contact"
        primary
        iconClassName="fas fa-envelope-open"
      >
        Request a Quote
      </Button>
    </div>
  );
};

export default ContactButtons;
