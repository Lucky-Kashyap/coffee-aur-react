import React from "react";
import "./header.css";
import logo from "../assets/logo (1).png";
function Header() {
  return (
    <header>
      {/* <h1 className='head'>Header</h1> */}
      <img className="logo" src={logo} alt="" />
      <a href="/">Home</a>
    </header>
  );
}

export default Header;
