// src/components/BackgroundParticles.js

import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const BackgroundParticles = () => {
  const particlesInit = async (main) => {
    // Cargar todos los módulos necesarios
    await loadFull(main);
  };

  const particlesLoaded = async (container) => {
    // Callback opcional después de que las partículas se cargan
    console.log('Partículas cargadas:', container);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: ["#FF4500", "#FF8C00", "#FFA500"], // Colores tipo fuego
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.7,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.3,
              sync: false,
            },
          },
          size: {
            value: { min: 2, max: 4 },
            random: true,
          },
          move: {
            direction: "bottom",
            enable: true,
            speed: { min: 1, max: 2 },
            straight: false,
            outModes: {
              default: "out",
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: false,
            },
            onClick: {
              enable: false,
            },
          },
        },
        detectRetina: true,
      }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1, // Debajo de los botones
      }}
    />
  );
};

export default BackgroundParticles;
