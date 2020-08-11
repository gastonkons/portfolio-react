import React from "react";
import "./Home.css";
import Navbar from "../../common/Navbar/Navbar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "../../common/Footer/Footer";

const Home = () => {
  return (
    <div className="container-fluid" name="home" id="home">
      <Navbar />
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
