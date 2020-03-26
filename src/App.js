import React from 'react';
import Home from './components/Home'
import { Router, Route, hashHistory, HashRouter, withRouter } from 'react-router-dom'
import FilmDetails from './components/FilmDetails';

function App() {
  return (
    <HashRouter basename='/'>
      <Route exact path='/' component={Home}/>
      <Route path='/details/:type/:id' component={withRouter(FilmDetails)}/>
    </HashRouter>
  );
}

export default App;
