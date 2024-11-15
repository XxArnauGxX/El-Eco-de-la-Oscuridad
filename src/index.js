import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/App.css';
import './i18n'; // Importar la configuración de i18n

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);