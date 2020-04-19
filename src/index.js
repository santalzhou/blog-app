import React from 'react';
import ReactDOM from 'react-dom';
import {GlobalStyle,} from './style.js';
import App from './App';
import {ThemeProvider, } from 'styled-components';


const theme = {
  'mainC': '#fef',
  'darkMC': '#9932CC',
  'color': '#363636',
};

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme} >
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


// ServiceWorker.unregister();
