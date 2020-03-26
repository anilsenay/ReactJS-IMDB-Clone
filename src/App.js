import React from 'react';
import Home from './components/Home'
import { Router, Route, hashHistory, HashRouter, withRouter } from 'react-router-dom'
import Details from './components/Details';

function App() {
  return (
    <HashRouter basename='/'>
      <Route exact path='/' component={Home}/>
      <Route path='/details/:type/:id' component={withRouter(Details)}/>
    </HashRouter>
  );
}

export default App;
