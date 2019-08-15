import React from 'react';
import { HashRouter, Route, Switch, hashHistory } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';

const BasicRoute = () => (
  <HashRouter history={hashHistory}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/detail" component={Detail} />
    </Switch>
  </HashRouter>
);

export default BasicRoute;
