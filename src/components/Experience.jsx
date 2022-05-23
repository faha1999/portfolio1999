import React, { useContext } from 'react';
import { themeContext } from '../Context';

export const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience">
      <div className="achievement">
        <div
          className="circle"
          style={{ color: darkMode ? 'var(--orange)' : '' }}
        >
          2+
        </div>
        <span style={{ color: darkMode ? 'white' : '' }}>years</span>
        <span>Experience</span>
      </div>

      <div className="achievement">
        <div
          className="circle"
          style={{ color: darkMode ? 'var(--orange)' : '' }}
        >
          50+
        </div>
        <span style={{ color: darkMode ? 'white' : '' }}>completed</span>
        <span>Projects</span>
      </div>

      <div className="achievement">
        <div
          className="circle"
          style={{ color: darkMode ? 'var(--orange)' : '' }}
        >
          5+
        </div>
        <span style={{ color: darkMode ? 'white' : '' }}>Companies</span>
      </div>
    </div>
  );
};
