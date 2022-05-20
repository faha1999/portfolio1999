import React from 'react';

export const ServicesCard = ({ emoji, heading, detail, color }) => {
  return (
    <div className="card" style={{ borderColor: { color } }}>
      <img src={emoji} alt="" />
      <span className="heading">{heading}</span>
      <span>{detail}</span>
      <h4 className="button">LEARN MORE</h4>
    </div>
  );
};
