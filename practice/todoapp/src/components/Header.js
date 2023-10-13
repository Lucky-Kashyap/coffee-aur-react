import React from 'react';
import logo from '../assets/general-task-list.png';

const Header = () => {
  return (
    <header>
    <div className="logo">
        <img src={logo} alt="Taskmate Logo" />
        <span>Taskmate</span>
    </div>
    <div className="themeSelector">
        <span className="light"></span>
        <span className="medium"></span>
        <span className="dark activeTheme"></span>
        <span className="blue"></span>
        <span className="dark-blue"></span>
        <span className="purple"></span>
    </div>
</header>
  )
}

export default Header