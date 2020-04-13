import React from 'react';
import ReactDOM from 'react-dom';
import {GlobalStyle} from './style.js'
import App from './App';
import { ThemeProvider } from 'styled-components';
// 缓存相关
// import * as serviceWorker from './serviceWorker';

const theme = {
  mainC: '#fef',
  darkMC: '#9932CC',
  color: '#363636'
}

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <ThemeProvider theme={theme} >
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


// serviceWorker.unregister();
