import React from "react";
import "./Portfolio.css";
import data from "../../../../JSON/data.json";

const Portfolio = () => {
  const { projects } = data;
  return (
    <div className="portfolio" id="portfolio">
      <div className="portfolio-title">
        <p>- Diseño & Desarrollo -</p>
        <h2 className="headline">Portfolio</h2>
      </div>
      <div className="portfolio-grid">
        {projects.map((project, i) => {
          const {
            name,
            typo,
            description,
            techs,
            demo,
            source,
            image,
          } = project;
          return (
            <div key={i} className="portfolio-card">
              <div className="card-description">
                <span className="card-typo">{typo}</span>
                <h3 className="card-title subheadline">{name}</h3>
                <p className="card-text">{description}</p>
                <p className="card-techs">
                  <span>Realizado en:</span>
                  {techs.map((tech) => `#${tech} `)}
                </p>
                <div className="card-cta">
                  <a target="_blank" rel="noopener noreferrer" href={demo}>
                    Ver demo {">"}
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href={source}>
                    Código fuente {">"}
                  </a>
                </div>
              </div>
              <div className="card-image">
                <img src={image} alt="project" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
