import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <div className="portfolio-title">
        <p>- Diseño & Desarrollo -</p>
        <h2 className="headline">Portfolio</h2>
      </div>
      <div className="portfolio-grid">
        <div className="portfolio-card">
          <div className="card-description">
            <h3 className="card-title subheadline">Awesome Website</h3>
            <p className="card-text">
              Planeación, diseño y desarrollo completo de la Aplicación web.
            </p>
            <p className="card-techs">
              <span>Realizado en:</span> #HTML #CSS #Javascript #Python
            </p>
            <div className="card-cta">
              <a>Live demo {">"}</a>
              <a>Source code {">"}</a>
            </div>
          </div>
          <div className="card-image">
            <img
              src="https://www.techmeworld.com/wp-content/uploads/2019/07/quality-web-design-1-1080x675.jpg"
              alt="project"
            />
          </div>
        </div>
        <div className="portfolio-card">
          <div className="card-description">
            <h3 className="card-title subheadline">Plumber</h3>
            <p className="card-text">
              Planeación, diseño y desarrollo completo de la Aplicación web.
            </p>
            <p className="card-techs">
              <span>Realizado en:</span> #HTML #CSS #Javascript #Python
            </p>
            <div className="card-cta">
              <a>Live demo {">"}</a>
              <a>Source code {">"}</a>
            </div>
          </div>
          <div className="card-image">
            <img
              src="https://v7k5v9i7.rocketcdn.me/wp-content/uploads/2020/02/Ottawa-Web-Design-header.png"
              alt="project"
            />
          </div>
        </div>
        <div className="portfolio-card">
          <div className="card-description">
            <h3 className="card-title subheadline">App+</h3>
            <p className="card-text">
              Planeación, diseño y desarrollo completo de la Aplicación web.
            </p>
            <p className="card-techs">
              <span>Realizado en:</span> #HTML #CSS #Javascript #Python
            </p>
            <div className="card-cta">
              <a>Live demo {">"}</a>
              <a>Source code {">"}</a>
            </div>
          </div>
          <div className="card-image">
            <img
              src="https://cdn.searchenginejournal.com/wp-content/uploads/2020/04/3-tips-to-master-a-minimalistic-web-design-to-boost-your-company---s-bottom-line-5e9dcad171280.png"
              alt="project"
            />
          </div>
        </div>
        <div className="portfolio-card">
          <div className="card-description">
            <h3 className="card-title subheadline">Coolinary</h3>
            <p className="card-text">
              Planeación, diseño y desarrollo completo de la Aplicación web.
            </p>
            <p className="card-techs">
              <span>Realizado en:</span> #HTML #CSS #Javascript #Python
            </p>
            <div className="card-cta">
              <a>Live demo {">"}</a>
              <a>Source code {">"}</a>
            </div>
          </div>
          <div className="card-image">
            <img
              src="https://blog.hotmart.com/blog/2020/06/BLOG_web-design.png"
              alt="project"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
