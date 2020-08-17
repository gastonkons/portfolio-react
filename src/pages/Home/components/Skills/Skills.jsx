import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills-title">
        <p>- Habilidades Principales -</p>
        <h2 className="headline">Skills</h2>
      </div>
      <div className="skills-tables">
        <div className="skills-table">
          <div className="skills-table__type">
            <h3>Lenguajes</h3>
          </div>
          <div className="skills-table__table">
            <ul>
              <li className="skill-css">
                <span className="skill">CSS</span>
                <span className="ability">80%</span>
              </li>
              <li className="skill-javascript">
                <span className="skill">Javascript</span>
                <span className="ability">70%</span>
              </li>
              <li className="skill-html">
                <span className="skill">HTML</span>
                <span className="ability">80%</span>
              </li>
              <li className="skill-git">
                <span className="skill">Git</span>
                <span className="ability">60%</span>
              </li>

              <li className="skill-node">
                <span className="skill">Node.js</span>
                <span className="ability">30%</span>
              </li>
              <li className="skill-python">
                <span className="skill">Python</span>
                <span className="ability">10%</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="skills-table">
          <div className="skills-table__type">
            <h3>Frameworks</h3>
          </div>
          <div className="skills-table__table">
            <ul>
              <li className="skill-react">
                <span className="skill">React</span>
                <span className="ability">40%</span>
              </li>
              <li className="skill-express">
                <span className="skill">Express</span>
                <span className="ability">20%</span>
              </li>
              <li className="skill-django">
                <span className="skill">Django</span>
                <span className="ability">5%</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="skills-table">
          <div className="skills-table__type">
            <h3>Bases de Datos</h3>
          </div>
          <div className="skills-table__table">
            <ul>
              <li className="skill-postgresql">
                <span className="skill">PostgreSQL</span>
                <span className="ability">40%</span>
              </li>
              <li className="skill-mongo">
                <span className="skill">MongoDB</span>
                <span className="ability">1%</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
