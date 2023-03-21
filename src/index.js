import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { GlobalStyle } from './GlobalStyle.Styled'
import { BrowserRouter } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/goit-react-hw-05-movies' >
      <App />
      <GlobalStyle />
    </BrowserRouter>
  </React.StrictMode>
);
