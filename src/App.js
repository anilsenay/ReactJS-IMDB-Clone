import React from 'react';
import Home from './components/Home'
import { Route, HashRouter, withRouter } from 'react-router-dom'
import Details from './components/Details'
import List from './components/List'

function App() {
  return (
    <HashRouter basename='/'>
      <Route exact path='/' component={Home}/>
      <Route path='/details/:type/:id' component={withRouter(Details)}/>
      <Route path='/lists/:listType' component={withRouter(List)}/>
    </HashRouter>
  );
}

export default App;
