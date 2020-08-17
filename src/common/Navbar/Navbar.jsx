import React from "react";
import "./Navbar.css";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

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
        <Link to="/">
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
              <LinkScroll
                smooth={true}
                spy={true}
                activeClass="active"
                offset={-100}
                to="header"
                onClick={menuHandle}
              >
                <li>Home</li>
              </LinkScroll>
              <LinkScroll
                smooth={true}
                spy={true}
                activeClass="active"
                offset={-100}
                to="portfolio"
                onClick={menuHandle}
              >
                <li>Portfolio</li>
              </LinkScroll>
              <LinkScroll
                smooth={true}
                spy={true}
                activeClass="active"
                offset={-40}
                to="skills"
                onClick={menuHandle}
              >
                <li>Skills</li>
              </LinkScroll>
              <LinkScroll
                smooth={true}
                spy={true}
                activeClass="active"
                offset={-100}
                to="about"
                onClick={menuHandle}
              >
                <li>Acerca de</li>
              </LinkScroll>
              <LinkScroll
                smooth={true}
                spy={true}
                activeClass="active"
                offset={-100}
                to="contact"
                onClick={menuHandle}
              >
                <li>Contacto</li>
              </LinkScroll>
              <LinkScroll
                smooth={true}
                spy={true}
                activeClass="active"
                offset={-100}
                to="cv"
                onClick={menuHandle}
              >
                <li>Ver CV</li>
              </LinkScroll>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
