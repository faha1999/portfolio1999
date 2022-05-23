import React, { useContext } from 'react';
import Resume from '../images/faha1999.pdf';
import HeartEmoji from '../images/heartemoji.png';
import Glasses from '../images/glasses.png';
import Humble from '../images/humble.png';
import { ServicesCard } from './partials/ServicesCard';
import { themeContext } from '../Context';

export const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="services">
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
        <div style={{ left: '19rem' }}>
          <ServicesCard
            emoji={HeartEmoji}
            heading={'Design'}
            detail={'Figma, Adobe xd, Photoshop, Illustrator'}
          />
        </div>

        <div style={{ top: '12rem', left: '-4rem' }}>
          <ServicesCard
            emoji={Glasses}
            heading={'Developer'}
            detail={'Html, Css, JavaScript, React, Nodejs, Express'}
          />
        </div>

        <div style={{ top: '21.5rem', left: '12rem' }}>
          <ServicesCard
            emoji={Humble}
            heading={'UI/UX'}
            detail={
              'Lorem ispum dummy text are usually use in section where we need some random text'
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </div>

        <div
          className="blur s-blur2"
          style={{ background: 'var(--purple)' }}
        ></div>
      </div>
    </div>
  );
};
