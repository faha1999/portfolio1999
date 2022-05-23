import React, { useContext, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { themeContext } from '../Context';

import Resume from '../images/faha1999.pdf';

export const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();

  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_fy2n0fi',
        'template_kansaz8',
        form.current,
        '9gK4-Iep5SoG0GGKY',
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
          alert('Try again!');
        },
      );

    e.target.reset();
  };

  return (
    <div className="contact">
      <div className="left">
        <span style={{ color: darkMode ? 'white' : '' }}>Get in touch</span>
        <span>Contact me</span>

        <a href={Resume} download>
          <button className="button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: '#ABF1FF94' }}></div>
      </div>

      <div className="right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="user"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="user"
            required
          />

          <textarea
            name="message"
            className="user"
            placeholder="Message"
            required
          ></textarea>

          <button type="submit" value="send" className="button">
            Send
          </button>

          <span className="message">
            {done &&
              'Thanks for contacting with me. I received your message. I will reach you soon. Have a good day.'}
          </span>

          <div
            className="blur c-blur1"
            style={{ background: 'var(--purple)' }}
          ></div>
        </form>
      </div>
    </div>
  );
};
