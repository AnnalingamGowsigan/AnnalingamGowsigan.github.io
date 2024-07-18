import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Gowsi</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
          {/* <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li> */}
        </ul>

        <div className="footer__social">
          {/* <a
            href="
          https://www.instagram.com/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-instagram"></i>
          </a>
          <a
            href="
          https://www.facebook.com/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-facebook"></i>
          </a>
          <a
            href="
          https://twitter.com/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-twitter"></i>
          </a> */}

          {/* need to delete below link and need to add above accounts */}
          <a
            href="https://www.linkedin.com/in/annalingam-gowsigan-87a3991b4/"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i class="uil uil-linkedin"></i>
          </a>

          <a
            href="https://github.com/AnnalingamGowsigan"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i class="uil uil-github"></i>
          </a>

          <a
            href="https://people.ce.pdn.ac.lk/students/e18/115/"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i class="uil uil-dribbble"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; A_Gowsigan. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
