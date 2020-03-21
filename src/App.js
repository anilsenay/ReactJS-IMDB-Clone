import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import LeftBar from './components/LeftBar';
import Explore from './components/Explore';

function App() {
  return (
    <div className="container container-custom">
      <NavBar/>
      <div className="row row-custom">
        <div className="col-md-auto">
          <LeftBar />
        </div>
        <div className="col">
          <Explore />
        </div>
      </div>
    </div>
  );
}

export default App;
