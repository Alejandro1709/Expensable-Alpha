import React from 'react';
import { Global } from '@emotion/react';
import { global, reset } from './styles';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global styles={reset} />
    <Global styles={global} />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
