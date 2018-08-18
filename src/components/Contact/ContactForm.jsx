import React from 'react';

const ContactForm = () => {
  return (
    <div>
      <form name="contact" method="POST" netlify netlify-honeypot="bot-field">
        <input name="name" placeholder="John Doe" type="text" />
        <button>Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
