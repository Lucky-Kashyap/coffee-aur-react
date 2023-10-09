import React from "react";
import "./header.css";
import logo from "../assets/photo-1576248004793-2c21b24b7bcc.avif";
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
