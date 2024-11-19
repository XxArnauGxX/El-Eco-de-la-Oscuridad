// src/components/GameScreen.js

import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import OptionButtons from './OptionButtons';
import '../styles/GameScreen.css';
import { gsap } from 'gsap';

const GameScreen = ({ story, onOptionSelect }) => {
  const el = useRef(null);
  const [options, setOptions] = useState([]);
  const backgroundMusicRef = useRef(new Audio('/music/game-music.mp3'));

  useEffect(() => {
    // Configurar y reproducir música de fondo de la historia
    const backgroundMusic = backgroundMusicRef.current;
    backgroundMusic.loop = true;
    backgroundMusic.volume = 0.3;
    backgroundMusic.play().catch((error) => {
      console.error("Error al reproducir la música de fondo del juego:", error);
    });

    // Animación de entrada del GameScreen
    gsap.from(".game-screen", { opacity: 0, duration: 1, y: 20 });

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
      backgroundMusic.pause();
    };
  }, [story]);

  return (
    <div className="game-screen">
      <div className="narration" ref={el}></div>
      {options.length > 0 && (
        <OptionButtons options={options} onOptionSelect={onOptionSelect} />
      )}
    </div>
  );
};

export default GameScreen;
