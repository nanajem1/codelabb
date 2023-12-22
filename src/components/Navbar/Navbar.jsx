import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logoIlab from "../../Images/logo-ilab.png";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logoIlab} alt="Logo" className="logo" />
      </div>
      <div className="navbar-center">
        <button
          className={isActive("/") ? "active" : ""}
          onClick={() => handleNavigation("/")}
        >
          Home
        </button>
        <button
          className={isActive("/about") ? "active" : ""}
          onClick={() => handleNavigation("/about")}
        >
          About Us
        </button>
        <button
          className={isActive("/contact") ? "active" : ""}
          onClick={() => handleNavigation("/contact")}
        >
          Contact
        </button>
      </div>
      <div className="buttons">
        <button id="signup">Sign Up</button>
        <button id="login">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
