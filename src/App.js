// src/App.js

import React, { useState, useEffect } from 'react';
import MainMenu from './components/MainMenu';
import GameScreen from './components/GameScreen';
import story_es from './story/story_es.json';
import story_en from './story/story_en.json';
import './styles/App.css';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { i18n } = useTranslation();
  const [currentStoryId, setCurrentStoryId] = useState(null);
  const [storyData, setStoryData] = useState(story_es); // Inicializa con español

  // Actualizar storyData cuando cambia el idioma
  useEffect(() => {
    if (i18n.language === 'en') {
      setStoryData(story_en);
    } else {
      setStoryData(story_es);
    }
    // Resetear la historia al cambiar de idioma
    setCurrentStoryId(null);
  }, [i18n.language]);

  const startGame = () => {
    setCurrentStoryId('start');
  };

  const handleOptionSelect = (nextStoryId) => {
    setCurrentStoryId(nextStoryId);
  };

  return (
    <div className="App">
      {!currentStoryId ? (
        <MainMenu onStart={startGame} />
      ) : (
        <GameScreen
          story={storyData[currentStoryId]}
          onOptionSelect={handleOptionSelect}
        />
      )}
    </div>
  );
};

export default App;