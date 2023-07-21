import React from "react";
import "../Styles/contact.css";
import { BsFillEnvelopeOpenFill } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaAngleUp } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

const ContactSection = () => {
  return (
    <>
      <section className="contact-container" id="contact">
        <h3>CONTACT ME HERE 👇 </h3>
        <div className="contact">
          <span id="contact-email">
            <BsFillEnvelopeOpenFill id="email-icon" />
          </span>
          <div className="email">
            <h4>Mail</h4>
            <a id="email-link" href="mailto:kaleharshali19@gmail.com">
              kaleharshali19@gmail.com
            </a>
          </div>
        </div>

        <footer className="footer">
          <div className="container">
            <span className="back-to-top">
              <HashLink to="#home" smooth>
                <FaAngleUp id="up-arrow" />
              </HashLink>
            </span>
            <div className="social-links">
              <a
                href=" https://www.linkedin.com/in/harshali-kale-484497234/ "
                rel="noopener noreferrer"
                target="_blank"
                aria-label="linkedin"
              >
                <BsLinkedin
                  id="links"
                  style={{
                    fontSize: "25px",
                    color: "#ffff",
                    marginRight: "50px",
                  }}
                />
              </a>
              <a
                href=" https://github.com/harshali19-hk "
                rel="noopener noreferrer"
                target="_blank"
                aria-label="github"
              >
                <BsGithub
                  id="links"
                  style={{ fontSize: "25px", color: "#ffff" }}
                />
              </a>
            </div>
            <p>Made with ❤️ by Harshali Kale</p>
          </div>
        </footer>
      </section>
    </>
  );
};

export default ContactSection;
