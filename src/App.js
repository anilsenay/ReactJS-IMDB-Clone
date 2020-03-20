import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import LeftBar from './components/LeftBar';
import Explore from './components/Explore';

function App() {
  return (
    <div className="container container-custom">
      <NavBar/>
      <div class="row row-custom">
        <div class="col-md-auto">
          <LeftBar />
        </div>
        <div class="col">
          <Explore />
        </div>
      </div>
    </div>
  );
}

export default App;
