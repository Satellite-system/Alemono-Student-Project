import React from "react";
import logoImg from "../../assets/logo.png";
import "./styleNavbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar">
      <NavLink to="/">
        <img src={logoImg} alt="logo" className="navbar_logoImg" />
      </NavLink>
      <nav>
        <NavLink to='/me' className="navbar_userContainer">
          <p>Student</p>
        </NavLink>
      </nav> 
    </header>
  );
};

export default Navbar;
