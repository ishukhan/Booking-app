import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainor">
        <span className="logo">Booking.com</span>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
