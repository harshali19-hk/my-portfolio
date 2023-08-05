import React  from "react";
import "../Styles/projects.css";


const ProjectSection = () => {

  return (
    <>
      <section className="project-wrapper" id="projects">
        <div className="project-container">
          <h3>PROJECTS</h3>
          <section className="project-grid">
            
            <section className="main-project" >
              <div className="project-img">
                <div className="pro-img1"></div>
              </div>
              <div className="project-text-content">
                <h5>DEFI-CRYPTO </h5>
                <p>
                  It is a Crypto currency website built using react. I have used
                  Coin Gecki API to access real time crypto currency data.The
                  data is fetched using Axios Library.this website is fully
                  responsive.
                  <br />
                  <span> React | Vanilla CSS</span>
                </p>
                <div className="pro-links">
                  <a
                    href="https://github.com/harshali19-hk/Crypto-App"
                    target="_blank"
                  >
                    Code
                  </a>
                  <a href="https://defi-coin.netlify.app/" target="_blank">
                    Demo
                  </a>
                </div>
              </div>
            </section>

            <section className="main-project" >
            <div className="project-img">
                <div className="pro-img2"></div>
              </div>
              <div className="project-text-content">
                <h5>JOB PORTAL</h5>
                <p>
                  A Job portal website for finding jobs built using React.Js .
                  React-router is used to navigate through pages.Context API is used for state management.
                  It's fully functional (not responsive) <br />
                  <span>React | Vanilla CSS | Bootstrap</span>
                </p>
                <div className="pro-links">
                  <a
                    href="https://github.com/harshali19-hk/Job-Portal"
                    target="_blank"
                  >
                    Code
                  </a>
                  <a href="https://jobsadda.netlify.app/" target="_blank">
                    Demo
                  </a>
                </div>
              </div>
              

            </section>
            <section className="main-project"  >
              <div className="project-img">
                <div className="pro-img3"></div>
              </div>
              <div className="project-text-content">
                <h5>BOOK STORE</h5>
                <p>
                  This is a simple book store website built in React using
                  functional components, Hooks, Props. This website is
                  functional, Books can be added to cart. <br />
                  <span>React | Vanilla CSS | Bootstrap</span>
                </p>
                <div className="pro-links">
                  <a
                    href="https://github.com/harshali19-hk/Book-Store"
                    target="_blank"
                  >
                    Code
                  </a>
                  <a href="https://bookish-store.netlify.app/" target="_blank">
                    Demo
                  </a>
                </div>
              </div>
            </section>
          </section>
        </div>
      </section>
    </>
  );
};

export default ProjectSection;
