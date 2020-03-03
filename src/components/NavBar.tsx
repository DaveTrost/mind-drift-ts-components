import React from 'react';
import { Link } from 'react-router-dom';
// const { useLogout } = require('../utils/WithSession');
import HOMEicon from '../assets/HOMEicon.png';
import PROFILEicon from '../assets/PROFILEicon.png';
import SETTINGSicon from '../assets/SETTINGSicon.png';
import FLOWERicon from '../assets/FLOWERicon.png';
import './NavBar.scss';


const NavBar = () => {
  // const logout = useLogout();
  // const logout:void = console.log('logout');

  return (
    <div className="NavBar">
      <button>Log Out</button>
      <span className="NavigationFooter">
        <Link to="/"><img src={HOMEicon} alt="Home" />HOME</Link>&nbsp;
        <Link to="/profile"><img src={PROFILEicon} alt="Profile" /></Link>
        <Link to="/settings"><img src={SETTINGSicon} alt="Settings" /></Link>
        <Link to="/about-us"><img src={FLOWERicon} alt="About Us" /></Link>
      </span>
    </div>
  );
};

export default NavBar;
