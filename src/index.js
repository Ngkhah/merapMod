import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { ColorContextProvider } from './pages/Layout/HomeLayout/DarkMode/store';
import reportWebVitals from './reportWebVitals';
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
