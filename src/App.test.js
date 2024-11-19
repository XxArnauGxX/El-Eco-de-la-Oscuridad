// src/App.test.js

import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

test('renders main menu and starts game on play button click', async () => {
  // Configurar el idioma a español para el test
  i18n.changeLanguage('es');

  render(
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  );

  // Espera a que el botón de jugar aparezca
  const playButton = await screen.findByText(/jugar/i);
  expect(playButton).toBeInTheDocument();

  // Simula el clic en el botón de jugar
  fireEvent.click(playButton);

  // Espera a que la narración aparezca
  const narrationElement = await screen.findByText(/Te encuentras al borde de un antiguo bosque al anochecer./i);
  expect(narrationElement).toBeInTheDocument();
});
