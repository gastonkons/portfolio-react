import React from "react";
import "./Header.css";
import PerfilImg from "../../../../assets/images/Perfil.jpg";
import Arrow from "../../../../assets/images/arrow.svg";

import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="header-container" id="header">
      <div className="header-hero">
        <div className="header-img">
          <img src={PerfilImg} alt="Gastón Konstantinides" />
        </div>
        <div className="header-hello">Hola, soy</div>
        <div className="header-name">Gastón </div>
        <div className="header-lastname">Konstantinides</div>
        <div className="header-description">
          | Desarrollador Full Stack | Diseñador UI/UX |
        </div>
        <div className="header-about">
          <Link smooth to="about" offset={-100}>
            ¿Quieres saber más?
            <div className="header-about-animation">
              <div className="header-about-arrow">
                <img src={Arrow} alt="Go bottom" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
