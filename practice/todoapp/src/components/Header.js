import React, { useEffect, useState } from 'react';
import logo from '../assets/general-task-list.png';

const Header = () => {
    const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")) || "dark");

    useEffect(() => {
      localStorage.setItem("theme", JSON.stringify(theme));
      document.documentElement.removeAttribute("class");
      document.documentElement.classList.add(theme);
    }, [theme]);
  
    return (
      <header>
          <div className="logo">
              <img src={logo} alt="Todo Logo" />
              <span>TaskMate</span>
          </div>
          <div className="themeSelector">
              <span onClick={() => setTheme("light")} className={ theme === "light" ? "light activeTheme" : "light"}></span>
              <span onClick={() => setTheme("medium")} className={ theme === "medium" ? "medium activeTheme" : "medium"}></span>
              <span onClick={() => setTheme("dark")} className={ theme === "dark" ? "dark activeTheme" : "dark"}></span>
              <span onClick={() => setTheme("blue")} className={ theme === "blue" ? "blue activeTheme" : "blue"}></span>
              <span onClick={() => setTheme("dark-blue")} className={ theme === "dark-blue" ? "dark-blue activeTheme" : "dark-blue"}></span>
              <span onClick={() => setTheme("purple")} className={ theme === "purple" ? "purple activeTheme" : "purple"}></span>
          </div>
      </header>
    )
}

export default Header