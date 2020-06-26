import React from 'react';
import { Router, Route } from 'react-router-dom';
import { history } from './history';

const Main = () => (
  <div>
    <h1>Zopa GKE example</h1>
    <a href="https://github.com/Blimeys/zopa-gke" target="_blank">
      Example repository
    </a>
    <h2>Zopians</h2>
  </div>
);

const App = () => (
  <Router history={history}>
    <Route path={'/'} component={Main} />
  </Router>
);

export default App;
