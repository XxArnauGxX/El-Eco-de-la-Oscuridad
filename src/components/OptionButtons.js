// src/components/OptionButtons.js
import React, { useEffect } from 'react';
import '../styles/OptionButtons.css';
import { gsap } from 'gsap';

const OptionButtons = ({ options, onSelect }) => {
  useEffect(() => {
    // Animar la aparición de los botones de opciones
    gsap.from(".option-button", { opacity: 0, y: 20, stagger: 0.2, duration: 0.5 });
  }, []);

  return (
    <div className="option-buttons">
      {options.map((option, index) => (
        <button
          key={index}
          className="option-button"
          onClick={() => onSelect(option.nextStory)}
        >
          {option.text}
        </button>
      ))}
    </div>
  );
};

export default OptionButtons;
