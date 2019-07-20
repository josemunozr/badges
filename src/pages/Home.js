import React from 'react';

import './styles/Home.css';
import logoPlatziConf from '../images/platziconf-logo.svg';
import austronaustas from '../images/astronauts.svg';
function Home() {
  return (
    <div className="Home">
      <div className="row Home__container">
        <div className="col-5 Home__info-container">
          <div className="Home__info">
            <img src={logoPlatziConf} alt="Logo platzi conf" />
            <h1>Print Your Badges</h1>
            <p>The easiest way to manage you conference</p>
          </div>
          <button className="btn btn-primary">Star Now</button>
        </div>
        <div className="col-7 Home__astronauts">
          <img src={austronaustas} alt="austronaustas" />
        </div>
      </div>
    </div>
  );
}

export default Home;
