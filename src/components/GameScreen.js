// src/components/GameScreen.js
import React, { useState, useEffect, useRef } from 'react';
import '../styles/GameScreen.css';

const GameScreen = ({ storyData }) => {
  const [currentScene, setCurrentScene] = useState('start');
  const audioRef = useRef(null);

  useEffect(() => {
    // Preload images and audios
    Object.values(storyData).forEach(scene => {
      const img = new Image();
      img.src = scene.image;

      const audio = new Audio(`/music/${scene.music}`);
      audio.preload = 'auto';
    });
  }, [storyData]);

  useEffect(() => {
    // Manejar la reproducción de audio
    const scene = storyData[currentScene];
    if (scene && scene.music) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      const newAudio = new Audio(`/music/${scene.music}`);
      newAudio.loop = true;
      newAudio.volume = 0.5;
      newAudio.play().catch(error => console.error('Error al reproducir el audio:', error));
      audioRef.current = newAudio;
    }

    // Limpieza al cambiar de escena
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [currentScene, storyData]);

  const handleOptionClick = (nextStory) => {
    setCurrentScene(nextStory);
  };

  const scene = storyData[currentScene];

  if (!scene) {
    return <div className="error">Error: Escena no encontrada.</div>;
  }

  return (
    <div className="game-screen">
      <div className="title">El Eco de la Oscuridad</div>
      <img src={scene.image} alt={currentScene} className="scene-image" />
      <div className="scene-text">{scene.text}</div>
      <div className="options">
        {scene.options.map((option, index) => (
          <button
            key={index}
            className="option-button custom-button"
            onClick={() => handleOptionClick(option.nextStory)}
            aria-label={option.text}
          >
            {option.text}
          </button>
        ))}
      </div>
      {/* Botón para reiniciar el juego */}
      <button
        className="custom-button restart-button"
        onClick={() => setCurrentScene('start')}
        aria-label="Reiniciar Juego"
      >
        Reiniciar Juego
      </button>
    </div>
  );
};

export default GameScreen;
