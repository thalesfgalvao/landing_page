import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './contexts/ThemeContext';
import './styles/theme.css';
import { MainTemplate } from './templates';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <MainTemplate>
        <App />
      </MainTemplate>
    </ThemeProvider>
  </React.StrictMode>
);
