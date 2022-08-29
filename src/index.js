import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ColorContextProvider } from './Theme/store';
const container = document.getElementById('root');
const root = createRoot(container);


root.render(
  <React.StrictMode>
    <ColorContextProvider>
      <App />
    </ColorContextProvider>
  </React.StrictMode>
);


reportWebVitals();
