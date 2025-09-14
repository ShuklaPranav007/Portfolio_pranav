import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          <b>Pranav</b>
        </a>

        <div className={showMenu ? "nav__menu show__menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className="uil uil-estate nav__icon"></i>Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i>About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i>Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#projects" className="nav__link">
                <i className="uil uil-briefcase-alt nav__icon"></i>Projects
              </a>
            </li>
            <li className="nav__item">
              <a href="#qualification" className="nav__link">
                <i className="uil uil-graduation-cap nav__icon"></i>Qualification
              </a>
            </li>
            <li className="nav__item">
              <a href="#certificates" className="nav__link">
                <i className="uil uil-award nav__icon"></i>Certificates
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i>Contact Me
              </a>
            </li>
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => setShowMenu(false)}
            role="button"
            aria-label="Close menu"
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => setShowMenu(!showMenu)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
