import React, { useContext } from 'react';
import Upwork from '../images/Upwork.png';
import Fiverr from '../images/fiverr.png';
import Amazon from '../images/amazon.png';
import Shopify from '../images/Shopify.png';
import Facebook from '../images/Facebook.png';
import { themeContext } from '../Context';
import { motion } from 'framer-motion';

export const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="works">
      <div className="left">
        <span style={{ color: darkMode ? 'white' : '' }}>
          Works for All these
        </span>
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
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: '-40px' }}
          transition={{ duration: 3.5, type: 'spring' }}
          className="mainCircle"
        >
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
        </motion.div>

        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};
