// src/components/LanguageSelector.js

import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/LanguageSelector.css';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-selector">
      <button onClick={() => changeLanguage('es')} aria-label="Cambiar a Español">ES</button>
      <button onClick={() => changeLanguage('en')} aria-label="Change to English">EN</button>
      <button onClick={() => changeLanguage('fr')} aria-label="Changer en Français">FR</button>
    </div>
  );
};

export default LanguageSelector;
