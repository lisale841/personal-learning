import React from 'react';
import './navBar.css';
import {Link, Outlet} from "react-router-dom";
import '../../images/logo.jpg';
const NavBar= () =>{
  return (

  <div className="navBar">
    <li>
       <Link className="logo" to="/">
        <div className="circle">
          <img src={require('../../images/vera-saurus2.png')} alt ="logo" className="logoVerasaurus"/>
        </div>
      </Link>
    </li>
    <li>
      <Link className="logo" to="/animals">
      <div className="gameBorder">
         <img src={require('../../images/animals-logo.png')} alt ="animals-logo" className="gameLogo"/>
      </div>
      </Link>
    </li>
    <li>
      <Link className="logo" to="/foods">
      <div className="gameBorder">
         <img src={require('../../images/foods-logo.png')} alt ="food-logo" className="gameLogo"/>
      </div>
      </Link>
    </li>
      <Outlet />
  </div>
  );
}
export default NavBar;
