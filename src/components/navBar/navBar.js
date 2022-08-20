import React from 'react';
import './navBar.css';
import {Link, Outlet} from "react-router-dom";
import '../../images/logo.jpg';
const NavBar= () =>{
  return (
  <div className="background">
    <li>
      <img src={require('../../images/vera-saurus.png')} alt ="logo" className="logo"/>
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
