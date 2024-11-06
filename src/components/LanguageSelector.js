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
      <button onClick={() => changeLanguage('es')}>ES</button>
      <button onClick={() => changeLanguage('en')}>EN</button>
    </div>
  );
};

export default LanguageSelector;
