// src/App.test.js

import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

test('renders main menu and starts game on play button click', () => {
  render(
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  );

  const playButton = screen.getByText(/jugar/i);
  expect(playButton).toBeInTheDocument();

  fireEvent.click(playButton);

  // Espera a que la narración aparezca
  const narrationElement = screen.findByText(/Te encuentras al borde de un antiguo bosque al anochecer./i);
  expect(narrationElement).toBeTruthy();
});
