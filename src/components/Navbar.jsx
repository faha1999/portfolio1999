import React from 'react';
import { Toggle } from './partials/Toggle';
import { Link } from 'react-scroll/modules';

export const Navbar = () => {
  return (
    <div className="navbar" id="Navbar">
      <div className="left">
        <div className="name">Faha1999</div>
        <Toggle />
      </div>

      <div className="right">
        <div className="list">
          <ul>
            <Link
              spy={true}
              to="Navbar"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Home</li>
            </Link>

            <Link spy={true} to="Services" smooth={true}>
              <li>Services</li>
            </Link>

            <Link spy={true} to="Experience" smooth={true}>
              <li>Experience</li>
            </Link>

            <Link spy={true} to="Portfolio" smooth={true}>
              <li>Portfolio</li>
            </Link>

            <Link spy={true} to="Testimonials" smooth={true}>
              <li>Testimonials</li>
            </Link>
          </ul>
        </div>

        <Link spy={true} to="Contact" smooth={true}>
          <button className="button">Contact me</button>
        </Link>
      </div>
    </div>
  );
};
