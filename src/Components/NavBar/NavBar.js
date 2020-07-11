import React from "react";
import './NavBar.css' 

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#profile">Profile</a>
        </li>
        <li>
          <a href="#aboutme">About Me</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar