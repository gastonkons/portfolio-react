import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="about-line"></div>
      <div className="about-section">
        <h2>SOBRE MÍ</h2>
        <p>
          Me llamo <span className="bold">Gastón Konstantinides</span>, tengo{" "}
          <span className="bold">27 años</span>, vivo en{" "}
          <span className="bold">Córdoba Capital</span> y me dedico al
          desarrollo web hace ya <span className="bold">2 años</span>.
        </p>
        <p>
          Mi hobbie eran los videojuegos (aún me gustan), pero conocí la
          programación y con ella un{" "}
          <span className="bold">
            trabajobbie{" "}
            <span role="img" aria-label="smiling face">
              😄
            </span>
          </span>
          .
        </p>
        <p>
          Ah! Me gusta <span className="bold">participar en comuinidades</span>,
          los <span className="bold">retos</span> y el{" "}
          <span className="bold">trabajo en equipo</span>!
        </p>
      </div>
      <div className="about-line about-line-bottom"></div>
    </div>
  );
};

export default About;
