import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
// import AchievementToast from './AchievementToast';
import mindDriftIcon from '../assets/mindDriftIcon.png';
import './Home.scss';

const Home = () => (
  <section className="Home">
    <NavBar />
    {/* <AchievementToast /> */}
    <div className="homeContainer">
      <div className="logo">
        <img src={mindDriftIcon} alt="mindDrift logo" />
        <section className="headerText">
          <h2>mind</h2>
          <h3>Drift</h3>
        </section>
      </div>
      <div className="linksContainer">
        <Link to="/breathe">
          <button className="breatheButton">Breathe</button>
        </Link>
        <Link to="/settings">
          <button className="setupButton">Setup</button>
        </Link>
      </div>
    </div>
  </section>
);

export default Home;
