// src/App.js
import React, { useState, useEffect } from 'react';
import MainMenu from './components/MainMenu';
import GameScreen from './components/GameScreen';
import './styles/App.css';
import { useTranslation } from 'react-i18next';

function App() {
  const { i18n } = useTranslation();
  const [storyData, setStoryData] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [error, setError] = useState(null); // Nuevo estado para manejar errores

  const language = i18n.language || 'es'; // Obtener el idioma actual

  useEffect(() => {
    const fetchStory = async () => {
      console.log(`Intentando cargar la historia en el idioma: ${language}`);
      try {
        const response = await fetch(`/story/story_${language}.json`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setStoryData(data);
      } catch (error) {
        console.error('Error al cargar la historia:', error);
        setError(error.message); // Guardar el mensaje de error
      }
    };

    fetchStory();
  }, [language]);

  const handleStart = () => {
    setGameStarted(true);
  };

  if (storyData === null && !error) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Cargando historia...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-message">
        <p>Hubo un problema al cargar la historia: {error}. Por favor, intenta recargar la página.</p>
      </div>
    );
  }

  return (
    <div className="app">
      {/* Pantalla de Menú Principal o Juego */}
      {!gameStarted ? (
        <MainMenu onStart={handleStart} />
      ) : (
        <GameScreen storyData={storyData} />
      )}
    </div>
  );
}

export default App;
