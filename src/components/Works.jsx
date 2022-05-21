import React from 'react';
import Upwork from '../images/Upwork.png';
import Fiverr from '../images/fiverr.png';
import Amazon from '../images/amazon.png';
import Shopify from '../images/Shopify.png';
import Facebook from '../images/Facebook.png';

export const Works = () => {
  return (
    <div className="works">
      <div className="left">
        <span>Works for All these</span>
        <span>Brands & Clients</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing <br /> Lorem ipsum
          dolor sit. <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing. <br /> Lorem
          ipsum dolor sit amet, consectetur adipisicing elit.
        </span>

        <button className="button">Hire Me</button>

        <div className="blur s-blur" style={{ background: '#abf1ff94' }}></div>
      </div>

      <div className="right">
        <div className="mainCircle">
          <div className="circle">
            <img src={Upwork} alt="" />
          </div>

          <div className="circle">
            <img src={Fiverr} alt="" />
          </div>

          <div className="circle">
            <img src={Amazon} alt="" />
          </div>

          <div className="circle">
            <img src={Shopify} alt="" />
          </div>

          <div className="circle">
            <img src={Facebook} alt="" />
          </div>
        </div>

        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};
