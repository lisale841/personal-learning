import React from 'react';
import {Link, Outlet} from "react-router-dom";
const NavBar= () =>{
  return (
  <div>
    <li>
      <Link to="/animals">Animals</Link>
    </li>
      <Outlet />
  </div>
  );
}
export default NavBar;
