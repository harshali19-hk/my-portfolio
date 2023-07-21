import React, { useRef } from "react";
import "../Styles/navbar.css";
import { HashLink } from "react-router-hash-link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };

  const hideNavbar = () => {
    navRef.current.classList.remove("responsive-nav");
  };

  return (
    <>
      <header>
        <a class="logo" href="/">
          <span className="logo-text">
            &lt; <span id="main-text">harshalikale </span> / &gt;
          </span>
        </a>
        <nav className="nav-wrapper" id="navabr" ref={navRef}>
          <HashLink id="nav-link" to="#" onClick={hideNavbar} smooth>
            Home
          </HashLink>

          <HashLink id="nav-link" to="#about" onClick={hideNavbar} smooth>
            About
          </HashLink>

          <HashLink id="nav-link" to="#projects" onClick={hideNavbar} smooth>
            Projects
          </HashLink>

          <HashLink id="nav-link" to="#contact" onClick={hideNavbar} smooth>
            Contact
          </HashLink>

          {/* mobile navbar btns */}

          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn  " onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </>
  );
};

export default Navbar;
