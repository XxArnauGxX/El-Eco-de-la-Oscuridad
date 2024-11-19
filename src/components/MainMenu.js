// src/components/MainMenu.js

import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import { gsap } from 'gsap';
import '../styles/MainMenu.css';
import BackgroundParticles from './BackgroundParticles';
import Button from './Button';

const MainMenu = ({ onStart }) => {
  const { t } = useTranslation();
  const titleRef = useRef(null);
  const buttonsRef = useRef(null);
  const backgroundMusicRef = useRef(new Audio('/music/menu-music.mp3'));

  useEffect(() => {
    // Configurar y reproducir música de fondo
    const backgroundMusic = backgroundMusicRef.current;
    backgroundMusic.loop = true;
    backgroundMusic.volume = 0.5;
    backgroundMusic.play().catch((error) => {
      console.error("Error al reproducir la música de fondo:", error);
    });

    // Animaciones con GSAP
    gsap.from(titleRef.current, { opacity: 0, y: -50, duration: 2, ease: "back.out(1.7)" });
    gsap.from(buttonsRef.current.children, {
      opacity: 0,
      y: 20,
      stagger: 0.2,
      duration: 1,
      ease: "power2.out",
      delay: 1
    });

    // Limpieza al desmontar
    return () => {
      backgroundMusic.pause();
    };
  }, []);

  const handleStart = () => {
    onStart();
  };

  return (
    <div className="main-menu" role="main">
      <BackgroundParticles />
      <h1 className="game-title" ref={titleRef}>El Eco de la Oscuridad</h1>
      <div className="buttons" ref={buttonsRef}>
        <Button onClick={handleStart} ariaLabel={t('play')}>
          {t('play')}
        </Button>
        <LanguageSelector />
      </div>
    </div>
  );
};

export default MainMenu;
