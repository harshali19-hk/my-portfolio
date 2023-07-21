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
          <div className="about-img">
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
          <div className="about-content">
            <h4>
              An Electrical Engineer turned Front-End Developer <br /> based in
              Aurangabad, Maharashtra 📍
            </h4>
            <p>
              I got intrested in programming in my final semester of engineering
              while learnig a programming langauge as a main semester subject.
              <br />
              Hey, I'm a graduate in electrical engineering ,passionatly
              learning front end Development.On personal level, I can grab
              things very quickly and i'm strongly willing to learn and grow.
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
