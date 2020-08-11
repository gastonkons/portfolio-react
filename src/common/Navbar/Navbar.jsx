import React, { useState } from "react";
import "./Navbar.css";
import { ReactComponent as Logo } from "../../assets/images/Logo-blue.svg";
import iconSet from "../../JSON/selection.json";
import IcomoonReact from "icomoon-react";
// import { HashLink as Link } from "react-router-hash-link";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menuState, setMenuState] = useState(false);
  const [menuIcon, setMenuIcon] = useState("menu-open");
  const openMenu = () => {
    const menu = document.querySelector(".navbar-menu-opened");

    if (!menuState) {
      setMenuIcon("menu-close");
      setMenuState(true);
    } else {
      setMenuIcon("menu-open");
      setMenuState(false);
    }
    menu.classList.toggle("move-right");
  };

  const handleMode = (e) => {
    console.log("handleMode");
  };

  return (
    <div className="navbar">
      <div className="navbar-brand">
        <Link smooth to="/">
          <Logo />
          <span className="navbar-name">gastonkons</span>
        </Link>
      </div>
      <nav className="navbar-menu">
        <div className="navbar-mode" onClick={handleMode}>
          <IcomoonReact
            className="navbar-icon"
            iconSet={iconSet}
            icon="sun"
            size={18}
          />
        </div>
        <div className="navbar-menu-button" onClick={openMenu}>
          <IcomoonReact
            className="navbar-icon"
            iconSet={iconSet}
            icon={menuIcon}
            size={40}
          />
        </div>
        <div className="navbar-menu-opened move-right">
          <div className="navbar-menu-links">
            <div className="navbar-menu-link">
              <Link
                smooth={true}
                spy={true}
                activeClass="active"
                offset={-160}
                to="header"
              >
                Home
              </Link>
            </div>
            <div className="navbar-menu-link">
              <Link
                smooth={true}
                spy={true}
                offset={-80}
                activeClass="active"
                to="about"
              >
                About
              </Link>
            </div>
            <div className="navbar-menu-link">
              <Link
                smooth={true}
                spy={true}
                offset={-80}
                activeClass="active"
                to="portfolio"
              >
                Portfolio
              </Link>
            </div>
            <div className="navbar-menu-link">
              <Link
                smooth={true}
                spy={true}
                offset={-80}
                activeClass="active"
                to="contact"
              >
                Contact
              </Link>
            </div>
            <div className="navbar-menu-redes">
              <a
                href="https://www.linkedin.com/in/gastonkons/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <IcomoonReact
                  className="navbar-icon"
                  iconSet={iconSet}
                  icon="linkedin"
                  size={25}
                />
              </a>
              <a
                href="https://github.com/gastonkons"
                rel="noopener noreferrer"
                target="_blank"
              >
                <IcomoonReact
                  className="navbar-icon"
                  iconSet={iconSet}
                  icon="github"
                  size={25}
                />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
