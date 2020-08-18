import React from "react";
import "./Home.css";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import Navbar from "../../common/Navbar/Navbar";
import OpenToWork from "./components/OpenToWork/OpenToWork";
import { Link } from "react-scroll";
import Portfolio from "./components/Portfolio/Portfolio";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

const Home = () => {
  return (
    <div className="container-fluid" id="home">
      <Navbar />
      <header className="pt-44 header" id="header">
        <OpenToWork />
        <div className="hero">
          <div className="hero-content">
            <h1>Full Stack Developer</h1>
            <h2>Desarrollador Web y Diseñador</h2>
            <p>Impulsado por la Tecnología y la Creatividad</p>
            <Link smooth={true} offset={-100} to="portfolio">
              Ver Portfolio {">"}
            </Link>
            <Link smooth={true} offset={-100} to="about">
              Acerca de {">"}
            </Link>
          </div>
        </div>
      </header>
      <div className="triangle-path"></div>
      <Portfolio />
      <Skills />
      <div className="triangle-path"></div>
      <About />
      <Contact />
      <footer>
        <p>
          Make with <span>Passion</span> by <b>@gastonkons</b>.
        </p>
        <div className="footer-logo">
          <Logo />
        </div>
      </footer>
    </div>
  );
};

export default Home;
