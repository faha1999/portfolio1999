import React from 'react';
import gitHub from '../images/github.png';
import instagram from '../images/instagram.png';
import linkedin from '../images/linkedin.png';

export const Hero = () => {
  return (
    <div className="hero">
      <div className="left">
        <div className="name">
          <span>Hy! I'm </span>
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

      <div className="right">hi</div>
    </div>
  );
};
