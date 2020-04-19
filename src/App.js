import React, {Component, } from 'react';
import {BrowserRouter, Route, } from 'react-router-dom';

import Right from './common/right/index';
import Write from './pages/write/index';
import List from './pages/list/index';
import Axios from './axios';
import {Left, Main, } from './style';

Component.prototype.$axios = Axios; // 全局使用

function App () {

  return (
    <BrowserRouter>
      <Main>
        <Left>
          <Route
            path="/write"
            exact
            component={Write}
          />
          <Route
            component={List}
            exact
            path="/list"
          />
        </Left>
        <Right />
      </Main>
    </BrowserRouter>
  );

}

export default App;
