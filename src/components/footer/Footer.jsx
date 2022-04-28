import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="./index.html" className="footer__logo">
        BLANCOS
      </a>

      <ul className="permalinks">
        <li>
          <a href="./index.html">Home</a>
        </li>
        <li>
          <a href="#about">Tentang</a>
        </li>
        <li>
          <a href="#experience">Skill</a>
        </li>
        <li>
          <a href="#services">Layanan</a>
        </li>
        <li>
          <a href="#portfolio">Portofolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimoni</a>
        </li>
        <li>
          <a href="#contact">Kontak</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com">
          <FaTwitter />
        </a>
        <a href="https://instagram.com">
          <FaInstagram />
        </a>
      </div>

      <div className="footer__copyright">
        <small>Copyright &copy; 2022 - Si Bolang Dev</small>
      </div>
    </footer>
  );
};

export default Footer;
