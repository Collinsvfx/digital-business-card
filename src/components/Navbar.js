import React from "react";
import logo from "../images/React-icon.svg.png";

function Navbar() {
  return (
    <React.StrictMode>
      <nav>
        <img alt="logo" src={logo} className="the-img" />
        <h3 className="icon-name">ReactFacts</h3>
        <h4 className="title">React Course - Project 1 </h4>
      </nav>
    </React.StrictMode>
  );
}

export default Navbar;
