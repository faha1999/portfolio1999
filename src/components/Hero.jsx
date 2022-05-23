import React, { useContext } from 'react';
import gitHub from '../images/github.png';
import instagram from '../images/instagram.png';
import linkedin from '../images/linkedin.png';
import Vector1 from '../images/Vector1.png';
import Vector2 from '../images/Vector2.png';
import boy from '../images/boy.png';
import thumbup from '../images/thumbup.png';
import crown from '../images/crown.png';
import glassesimoji from '../images/glassesimoji.png';
import { FloatingDiv } from './partials/FloatingDiv';
import { themeContext } from '../Context';
import { motion } from 'framer-motion';

export const Hero = () => {
  const transition = { duration: 2, type: 'spring' };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="hero">
      <div className="left">
        <div className="name">
          <span style={{ color: darkMode ? 'white' : '' }}>Hy! I'm </span>
          <span>Kawsar Ahmed Fahad</span>
          <span>
            Frontend Developer with high level of experience in web designing
            and development, producting the Quality work
          </span>
        </div>

        <button className="button">Hire me</button>

        <div className="icon">
          <img src={gitHub} alt="gitHub" />
          <img src={instagram} alt="instagram" />
          <img src={linkedin} alt="linkedin" />
        </div>
      </div>

      <div className="right">
        <img src={Vector1} alt="Vector1" />
        <img src={Vector2} alt="Vector1" />
        <img src={boy} alt="boy" />
        <motion.img
          initial={{ left: '-36%' }}
          whileInView={{ left: '-24%' }}
          transition={transition}
          src={glassesimoji}
          alt="glassesimoji"
        />

        <motion.div
          initial={{ top: '-4%', left: '74%' }}
          whileInView={{ left: '68%' }}
          transition={transition}
          className="floating-div"
        >
          <FloatingDiv image={crown} text1="Web" text2="developer" />
        </motion.div>

        <motion.div
          initial={{ left: '9rem', top: '18rem' }}
          whileInView={{ left: '0rem' }}
          transition={transition}
          className="floating-div"
        >
          <FloatingDiv image={thumbup} text1="Best Design" text2="Award" />
        </motion.div>

        <div
          className="blur"
          style={{ background: ' rgba(238 210 255)' }}
        ></div>

        <div
          className="blur"
          style={{
            background: '#C1F5FF',
            top: '17rem',
            width: '21rem',
            height: '11rem',
            left: '-9rem',
          }}
        ></div>
      </div>
    </div>
  );
};
