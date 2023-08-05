import React from "react";
import "../Styles/about.css";
import aboutImg from "../assets/working-girl.png";
import emoji from "../assets/working emoji.png";

const AboutSection = () => {
  return (
    <>
      <section className="aboutPage-wrapper" id="about">
        <h3>ABOUT ME</h3>
        <div className="about-section">
          <div className="about-img"   >
            <img src={aboutImg} alt="my-image" id="my-img" />
            <img id="girl-emoji" src={emoji} alt="emoji" />
            <span id="emoji-text">
              <img
                src="https://sahilupadhyay.github.io/static/media/text2.3d5aa6ba2d0632bb4e0572631c3f9dc2.svg"
                alt="text"
                id="rotating-text"
              />
            </span>
          </div>
          <div className="about-content"  >
            <h4>
              An Electrical Engineer turned Front-End Developer <br /> based in
              Aurangabad, Maharashtra 📍
            </h4>
            <p>
      
              While studying a programming langauge as a main semester subject in my final semester of engineering,I got interested in programming.
              <br />
              Hey, I'm a graduate in electrical engineering ,passionately
              learning front end Development.On a personal level, I tend to pick things up quickly and willing to learn and grow.
              <br />
              My current skills are HTML, CSS, JavaScript, React.js , bootstrap,
              Git, Github
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default AboutSection;
