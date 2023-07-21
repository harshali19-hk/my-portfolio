import React from "react";
import "../Styles/hero.css";
import img from "../assets/Developer.png";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const HeroSection = () => {
  return (
    <>
      <div className="hero-wrapper" id="hero">
        <section className="hero-text">
          <h2>
            Hello, <span class="emoji"> 👋 </span>
          </h2>
          <h1>
            I'm <span>Harshali Kale</span>
          </h1>
          <h3>Front-End Developer</h3>

          <div className="social-icons">
            <a
              href=" https://www.linkedin.com/in/harshali-kale-484497234/ "
              rel="noopener noreferrer"
              target="_blank"
              aria-label="linkedin"
              id="links"
            >
              <BsLinkedin
                id="link"
                style={{
                  fontSize: "25px",
                  color: "#2d2e32",
                  marginRight: "30px",
                }}
              />
            </a>
            <a
              href=" https://github.com/harshali19-hk "
              rel="noopener noreferrer"
              target="_blank"
              aria-label="github"
              id="links"
            >
              <BsGithub
                id="link"
                style={{ fontSize: "25px", color: "#2d2e32" }}
              />
            </a>
          </div>
        </section>

        <section className="hero-img">
          <img src={img} alt="hero-image" />
        </section>
      </div>
    </>
  );
};

export default HeroSection;
