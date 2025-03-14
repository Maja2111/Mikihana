import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { LoginProvider } from '@components/isLoggedIn.jsx';
import '@/index.scss';
import App from '@/App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginProvider>
      <App />
    </LoginProvider>
  </StrictMode>
);
