// src/components/Button.js

import React from 'react';
import '../styles/Button.css';

const Button = ({ onClick, children, ariaLabel }) => {
  return (
    <button className="custom-button" onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  );
};

export default Button;
