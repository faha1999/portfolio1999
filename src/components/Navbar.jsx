import React from 'react';
import { Toggle } from './partials/Toggle';

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <div className="name">Faha1999</div>
        <Toggle />
      </div>

      <div className="right">
        <div className="list">
          <ul>
            <li>Homer</li>
            <li>Services</li>
            <li>Experience</li>
            <li>Portfolio</li>
            <li>Testimonials</li>
          </ul>
        </div>

        <button className="button">Contact me</button>
      </div>
    </div>
  );
};
