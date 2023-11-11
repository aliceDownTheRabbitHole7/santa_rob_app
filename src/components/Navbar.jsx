import React, { useState } from "react";
import { Link } from "react-router-dom";
import navbarData from "../data/navbarData";
import "../styles/Navbar.css";
import * as FaIcons from "react-icons/fa6";
import * as AiIcons from "react-icons/ai";

const navbarMap = navbarData.map((link, i) => {
  return (
    <li key={i} className="nav-text">
      <Link to={link.path} className="nav-link">
        {link.icon}
        <span>{link.text}</span>
      </Link>
    </li>
  );
});

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="nav-container">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar}/>
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {navbarMap}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
