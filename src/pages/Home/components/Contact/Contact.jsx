import React from "react";
import "./Contact.css";
import iconSet from "../../../../JSON/selection.json";
import IcomoonReact from "icomoon-react";
import { Link } from "react-scroll";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-title">
          <p>- Puedes comunicarte por donde prefieras -</p>
          <h2 className="headline">Contáctame!</h2>
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
              size={40}
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
              size={40}
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
              size={40}
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
              size={40}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
