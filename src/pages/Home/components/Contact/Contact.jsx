import React from "react";
import "./Contact.css";
import Background from "../../../../assets/images/SDLC.jpg";
import iconSet from "../../../../JSON/selection.json";
import IcomoonReact from "icomoon-react";
import { Link } from "react-scroll";

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-mark-content">
        <div className="contact-mark-bg">
          <img src={Background} alt="Background" />
        </div>
        <div className="contact-mark">
          <span role="img" aria-label="Earth">
            🌎
          </span>
          <h4>El futuro está a la vuelta de la esquina</h4>
          <h3>¿Me acompañas?</h3>
          <div className="contact-mark-buttons">
            <Link smooth to="contact-links">
              <button>Sí!</button>
            </Link>
            <Link smooth to="contact-links">
              <button>Tengo mis dudas</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="contact-links-container" id="contact-links">
        <div className="contact-links-content">
          <div className="contact-links-title">
            <h2>Contacto</h2>
          </div>
          <div className="contact-links">
            <a
              href="mailto:gastonkons@gmail.com?Subject=Hello%20world!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IcomoonReact
                className="contact-icon"
                iconSet={iconSet}
                icon="email"
                size={60}
              />
            </a>
            <a
              href="https://twitter.com/gastonkonstant"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IcomoonReact
                className="contact-icon"
                iconSet={iconSet}
                icon="twitter"
                size={60}
              />
            </a>
            <a
              href="https://github.com/gastonkons"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IcomoonReact
                className="contact-icon"
                iconSet={iconSet}
                icon="github"
                size={60}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/gastonkons/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IcomoonReact
                className="contact-icon"
                iconSet={iconSet}
                icon="linkedin"
                size={60}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
