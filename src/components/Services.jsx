import React, { useContext } from 'react';
import Resume from '../images/faha1999.pdf';
import HeartEmoji from '../images/heartemoji.png';
import Glasses from '../images/glasses.png';
import Humble from '../images/humble.png';
import { ServicesCard } from './partials/ServicesCard';
import { themeContext } from '../Context';
import { motion } from 'framer-motion';

export const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const transition = {
    duration: 1,
    type: 'spring',
  };

  return (
    <div className="services" id="Services">
      <div className="left">
        <span style={{ color: darkMode ? 'white' : '' }}>My awesome</span>
        <span>Services</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing <br /> Lorem ipsum
          dolor sit.
        </span>

        <a download href={Resume}>
          <button className="button">Download CV</button>
        </a>

        <div className="blur s-blur" style={{ background: '#abf1ff94' }}></div>
      </div>

      {/* Right */}
      <div className="right">
        <motion.div
          initial={{ left: '25rem' }}
          whileInView={{ left: '14rem' }}
          transition={transition}
        >
          <ServicesCard
            emoji={HeartEmoji}
            heading={'Design'}
            detail={'Figma, Adobe xd, Photoshop, Illustrator'}
          />
        </motion.div>

        <motion.div
          initial={{ left: '-11rem', top: '12rem' }}
          whileInView={{ left: '-4rem' }}
          transition={transition}
        >
          <ServicesCard
            emoji={Glasses}
            heading={'Developer'}
            detail={'Html, Css, JavaScript, React, Nodejs, Express'}
          />
        </motion.div>

        <motion.div
          initial={{ top: '21rem', left: '25rem' }}
          whileInView={{ left: '12rem' }}
          transition={transition}
        >
          <ServicesCard
            emoji={Humble}
            heading={'UI/UX'}
            detail={
              'Lorem ispum dummy text are usually use in section where we need some random text'
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>

        <div
          className="blur s-blur2"
          style={{ background: 'var(--purple)' }}
        ></div>
      </div>
    </div>
  );
};
