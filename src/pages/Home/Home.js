import React from "react";
import "./Home.css";
import { ReactComponent as Logo } from "../../assets/images/Logo.svg";
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
          <div
            className="hero-content"
            data-aos="fade-in"
            data-aos-offset="0"
            data-aos-delay="0"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <h1>Frontend Developer</h1>
            <h2>Desarrollador Web y Diseñador</h2>
            <p>Impulsado por la Tecnología y la Creatividad</p>
            <Link smooth={true} offset={-100} to="portfolio">
              Ver Portfolio {">"}
            </Link>
            <Link smooth={true} offset={-100} to="about">
              Sobre mi {">"}
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
          Made with <span>Passion</span> by <b>@gastonkons</b>.
        </p>
        <div className="footer-logo">
          <Logo />
        </div>
      </footer>
    </div>
  );
};

export default Home;
