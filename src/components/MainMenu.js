// src/components/MainMenu.js
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import { gsap } from 'gsap';
import '../styles/MainMenu.css';

const MainMenu = ({ onStart }) => {
  const { t } = useTranslation();

  useEffect(() => {
    // Animar la entrada del MainMenu
    gsap.from(".main-menu", { opacity: 0, duration: 1 });
  }, []);

  return (
    <div className="main-menu">
      <h1 className="game-title">El Eco de la Oscuridad</h1>
      <div className="buttons">
        <button className="menu-button" onClick={onStart}>
          {t('play')}
        </button>
        <LanguageSelector />
      </div>
    </div>
  );
};

export default MainMenu;
