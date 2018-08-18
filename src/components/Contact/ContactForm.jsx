import React from 'react';

const ContactForm = () => {
  return (
    <div>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <label>
          Your Name: <input type="text" name="name" />
        </label>
        <label>
          Message: <textarea name="message" />
        </label>
        <button>Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
