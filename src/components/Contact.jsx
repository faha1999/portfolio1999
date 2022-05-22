import React from 'react';
import Resume from '../images/faha1999.pdf';

export const Contact = () => {
  return (
    <div className="contact">
      <div className="left">
        <div>
          <span>Get in touch</span>
          <span>Contact me</span>
        </div>

        <a href={Resume} download>
          <button className="button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: '#ABF1FF94' }}></div>
      </div>

      <div className="right">
        <form>
          <input type="text" name="name" placeholder="Name" className="user" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="email"
          />
          <textarea
            name="message"
            className="textarea"
            placeholder="Message"
          ></textarea>
          <input type="submit" value="send" className="button" />

          <div
            className="blur c-blur1"
            style={{ background: 'var(--purple)' }}
          ></div>
        </form>
      </div>
    </div>
  );
};
