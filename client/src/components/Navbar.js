import React from 'react';
import { Link } from "react-router-dom";

 const Navbar = () => {
  
 
    return (
    <nav>
      <Link  to="/">
      </Link>
      <ul className="nav-Links">
        <Link  to="/heroes">
          <li>SuperWomen</li>
        </Link>
        <Link  to="/users">
          <li>Users</li>
        </Link>
        <Link  to="/about">
          <li>About</li>
        </Link>
      </ul>
    </nav>


      );
  }

 
export default Navbar;