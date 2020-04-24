import React from 'react';
import ReactDOM from 'react-dom';
import {GlobalStyle,} from './style.js';
import App from './App';
import {ThemeProvider, } from 'styled-components';
import {IconStyle} from './static/iconfont/index'


const theme = {
  'mainC': '#C7EDCC', // 护眼色
  'darkMC': '#2C902C',
  'color': '#363636',
};

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <IconStyle/>
    <ThemeProvider theme={theme} >
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


// ServiceWorker.unregister();
