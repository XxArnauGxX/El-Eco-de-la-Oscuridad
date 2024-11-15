// src/components/GameScreen.js
import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import OptionButtons from './OptionButtons';
import { gsap } from 'gsap';
import '../styles/GameScreen.css';
import { useTranslation } from 'react-i18next';

const GameScreen = ({ story, onOptionSelect }) => {
  const el = useRef(null);
  const [options, setOptions] = useState([]);
  useTranslation();

  useEffect(() => {
    // Animar la entrada del GameScreen
    gsap.from(".game-screen", { opacity: 0, duration: 1 });

    // Configurar Typed.js para la narración
    const typed = new Typed(el.current, {
      strings: [story.text],
      typeSpeed: 50,
      showCursor: false,
      onComplete: () => {
        setOptions(story.options);
      },
    });

    return () => {
      typed.destroy();
      setOptions([]);
    };
  }, [story]);

  return (
    <div className="game-screen">
      <div className="narration" ref={el}></div>
      {options.length > 0 && (
        <OptionButtons options={options} onSelect={onOptionSelect} />
      )}
    </div>
  );
};

export default GameScreen;
