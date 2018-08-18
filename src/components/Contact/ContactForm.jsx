import React from 'react';

const ContactForm = () => {
  return (
    <div>
      <form name="contact" method="POST" data-netlify>
        <input name="name" placeholder="John Doe" type="text" />
        <button>Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
