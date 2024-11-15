import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import { gsap } from 'gsap';
import '../styles/MainMenu.css';
import BackgroundParticles from './BackgroundParticles';

const MainMenu = ({ onStart }) => {
  const { t } = useTranslation();
  const backgroundAudioRef = useRef(null);
  const whisperAudioRef = useRef(null);

  useEffect(() => {
    backgroundAudioRef.current = new Audio('/music/background.mp3');
    backgroundAudioRef.current.loop = true;

    whisperAudioRef.current = new Audio('/sounds/click.mp3');
    whisperAudioRef.current.loop = true;
    whisperAudioRef.current.volume = 0.3;
  }, []);

  useEffect(() => {
    const timeline = gsap.timeline();
    timeline
      .from(".game-title", { opacity: 0, y: -100, duration: 1.5, ease: "power2.out", zIndex: 2 })
      .from(".menu-button", { opacity: 0, y: 50, duration: 1, stagger: 0.2, zIndex: 3 }, "-=1")
      .from(".language-selector", { opacity: 0, y: 50, duration: 1, zIndex: 3 }, "-=0.5");
  }, []);

  const handleClick = () => {
    if (whisperAudioRef.current) {
      whisperAudioRef.current.play().catch((error) => {
        console.error("Error al reproducir whisperAudio:", error);
      });
    }
    if (backgroundAudioRef.current) {
      backgroundAudioRef.current.play().catch((error) => {
        console.error("Error al reproducir backgroundAudio:", error);
      });
    }
    onStart();
  };

  return (
    <div className="main-menu" role="main">
      <BackgroundParticles />
      <h1 className="game-title">El Eco de la Oscuridad</h1>
      <div className="buttons">
        <button
          className="menu-button"
          onClick={handleClick}
          aria-label={t('play')}
        >
          {t('play')}
        </button>
        <LanguageSelector />
      </div>
    </div>
  );
};

export default MainMenu;