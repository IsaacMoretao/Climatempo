import './styles/Globals.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import { VerifyContextProvider } from './useContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <VerifyContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </VerifyContextProvider>
  </React.StrictMode>
)
