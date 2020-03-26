import React from 'react';
import '../App.css';
import NavBar from './NavBar/NavBar';
import LeftBar from './LeftBar';
import Explore from './Explore';

function Home() {
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

export default Home;