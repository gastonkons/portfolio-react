import React from "react";
import "./Navbar.css";
import { ReactComponent as Logo } from "../../assets/images/Logo.svg";
import { Link } from "react-scroll";

const Navbar = () => {
  const menuHandle = () => {
    let btn = document.querySelector(".nav-btn");
    let nav = document.querySelector(".navbar");
    let width = document.body.clientWidth;
    if (width < 800) {
      btn.classList.toggle("open");
      nav.classList.toggle("open");
    }
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link smooth to="header">
          <div className="navbar-logo">
            <Logo title="Gastón Konstantinides - Full Stack Developer" />
            <span className="navbar-logodescription">
              Gastón Konstantinides - Desarrollador Full Stack
            </span>
          </div>
        </Link>
        <nav className="navbar-nav">
          <div className="nav-btn" onClick={menuHandle}>
            <div className="nav-btn__burger"></div>
          </div>
          <div className="nav-links">
            <ul>
              <Link
                smooth={true}
                spy={true}
                activeClass="active"
                offset={-100}
                to="header"
                onClick={menuHandle}
              >
                <li>Home</li>
              </Link>
              <Link
                smooth={true}
                spy={true}
                activeClass="active"
                offset={-100}
                to="portfolio"
                onClick={menuHandle}
              >
                <li>Portfolio</li>
              </Link>
              <Link
                smooth={true}
                spy={true}
                activeClass="active"
                offset={-40}
                to="skills"
                onClick={menuHandle}
              >
                <li>Skills</li>
              </Link>
              <Link
                smooth={true}
                spy={true}
                activeClass="active"
                offset={-100}
                to="about"
                onClick={menuHandle}
              >
                <li>Sobre mi</li>
              </Link>
              <Link
                smooth={true}
                spy={true}
                activeClass="active"
                offset={-100}
                to="contact"
                onClick={menuHandle}
              >
                <li>Contacto</li>
              </Link>

              <a
                href="https://drive.google.com/file/d/1ysrbFcsoSgTTK6ILtmrafY20QOuY9WCc/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>Ver CV</li>
              </a>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
