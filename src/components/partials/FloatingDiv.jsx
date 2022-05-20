import React from 'react';

export const FloatingDiv = ({ image, text1, text2 }) => {
  return (
    <div className="floatingDiv">
      <img src={image} alt="crown" />
      <span>
        {text1} <br /> {text2}
      </span>
    </div>
  );
};
