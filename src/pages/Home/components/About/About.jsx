import React from "react";
import "./About.css";
import Perfil from "../../../../assets/images/Perfil.jpg";

const About = () => {
  return (
    <div className="about" data-aos="fade-right">
      <div className="about-title">
        <p>- Me llamo Gastón, lo primero -</p>
        <h2 className="headline">Sobre mí</h2>
      </div>
      <div className="about-content">
        <div className="about-image">
          <img src={Perfil} alt="Foto de Gastón Konstantinides" />
        </div>
        <div className="about-text" data-aos="fade-left">
          <p>
            <span>Frontend Developer</span> con background de Backend.
          </p>
          <p className="p-min">
            También trabajé como <span>Diseñador</span> y{" "}
            <span>Community Manager</span> de manera freelance.
          </p>
          <p className="p-min">
            Tengo 27 años, vivo en <span>Córdoba</span>, Argentina. Actualmente
            curso el programa <span>Codo a Codo</span> con especialidad en{" "}
            <span>Full Stack con Python</span>.
          </p>
          <p className="p-min">
            Me encantan los <span>retos</span> y participar en comunidades!
          </p>
          <div className="about-cta">
            <a
              href="https://drive.google.com/file/d/13ELh0120qsU0PTIJQmRKtJ1Cl4IVf87H/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Curriculum Vitae {">"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
