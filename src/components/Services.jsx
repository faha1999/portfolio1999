import React from 'react';
import heartemoji from '../images/heartemoji.png';
import glasses from '../images/glasses.png';

export const Services = () => {
  return (
    <div className="services">
      <div className="left">
        <span>My awesome</span>
        <span>Services</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing <br /> Lorem ipsum
          dolor sit.
        </span>
        <button className="button">Download CV</button>
        <div className="blur s-blur" style={{ background: '#abf1ff94' }}></div>
      </div>
      <div className="right"></div>
    </div>
  );
};
