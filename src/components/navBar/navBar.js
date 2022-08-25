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
        Animals
      </Link>
    </li>

      <Outlet />
  </div>
  );
}
export default NavBar;
