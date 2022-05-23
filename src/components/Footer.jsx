import React from 'react';
import Wave from '../images/wave.png';
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Gitub from '@iconscout/react-unicons/icons/uil-github';

export const Footer = () => {
  return (
    <footer>
      <img src={Wave} alt="" style={{ width: '100%' }} />
      <div className="f-content">
        <span>faha199@gmail.com</span>
        <div className="f-icons">
          <Insta color="white" size={'3rem'} />
          <Facebook color="white" size={'3rem'} />
          <Gitub color="white" size={'3rem'} />
        </div>
      </div>
    </footer>
  );
};
