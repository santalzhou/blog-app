import React, { Component, } from 'react';
import { BrowserRouter, Route, } from 'react-router-dom';

import Home from './pages/home/index';
import Right from './common/right/index';
import Write from './pages/write/index';
import List from './pages/list/index';
import Detail from './pages/detail/index';
import Axios from './axios';
import { Left, Main, } from './style';

Component.prototype.$axios = Axios; // 全局使用

function App() {

  return (
    <BrowserRouter>
      <Main>
        <Left>
          <Route path="/" exact component={Home} />
          <Route path="/write" exact component={Write} />
          <Route path="/list" component={List} exac />
          <Route path="/detail/:id" component={Detail} exact />
        </Left>
        <Right />
      </Main>
    </BrowserRouter>
  );

}

export default App;
