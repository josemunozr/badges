import React from 'react';

import './styles/Home.css';
import logoPlatziConf from '../images/platziconf-logo.svg';
import austronaustas from '../images/astronauts.svg';
import { Link } from 'react-router-dom';

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
          <Link className="btn btn-primary" to="/badges">
            Star Now
          </Link>
        </div>
        <div className="col-7 Home__astronauts">
          <img src={austronaustas} alt="austronaustas" />
        </div>
      </div>
    </div>
  );
}

export default Home;
