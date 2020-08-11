import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <span className="footer-description">
          Make with{" "}
          <span role="img" aria-label="Heart Emoji">
            ❤️
          </span>
          by <b>gastonkons</b>
        </span>
      </div>
    </div>
  );
};

export default Footer;
