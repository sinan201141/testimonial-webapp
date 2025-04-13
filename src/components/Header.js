import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">TestimonialApp</Link>
        <nav className="nav-menu">
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
          <Link to="/create" className={location.pathname === "/create" ? "active" : ""}>Submit</Link>
          <Link to="/testimonials" className={location.pathname === "/testimonials" ? "active" : ""}>View</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
