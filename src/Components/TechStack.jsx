import React from "react";
import "../Styles/techStack.css";
import img1 from "../assets/React-icon.svg.png";
import img3 from "../assets/html.png";
import img4 from "../assets/css.png";

const TechStack = () => {
  return (
    <>
      <section className="skills-Wrapper">
        <div class="skills">
          <p>Tech Stack</p> |
          <div class="logos">
            <ul className="logos-list">
              <li>
                <img
                  id="tech-logos"
                  src={img3}
                  title="HTML5"
                  alt="skill-icon"
                />
              </li>
              <li>
                <img id="tech-logos" src={img4} title="CSS3" alt="skill-icon" />
              </li>
              <li>
                <img
                  id="tech-logos"
                  src="https://sahilupadhyay.github.io/static/media/javascript.de4c2594613e34b15666206bbede7327.svg"
                  title="Java Script"
                  alt="skill-icon"
                />
              </li>
              <li>
                <img
                  id="tech-logos"
                  src={img1}
                  title="React"
                  alt="skill-icon"
                />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default TechStack;
