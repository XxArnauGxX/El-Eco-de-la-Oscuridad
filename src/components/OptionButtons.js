// src/components/OptionButtons.js

import React from 'react';
import '../styles/OptionButtons.css';
import Button from './Button';

const OptionButtons = ({ options, onOptionSelect }) => {
  const handleClick = (nextStoryId) => {
    // Reproducir sonido de selección
    const selectSound = new Audio('/sounds/select.mp3');
    selectSound.play();
    onOptionSelect(nextStoryId);
  };

  return (
    <div className="option-buttons">
      {options.map((option, index) => (
        <Button
          key={index}
          onClick={() => handleClick(option.nextStory)}
          ariaLabel={option.text}
        >
          {option.text}
        </Button>
      ))}
    </div>
  );
};

export default OptionButtons;
