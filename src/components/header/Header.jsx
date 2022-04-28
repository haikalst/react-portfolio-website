import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/profile-me.png";
import HeaderSocial from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Halo, saya</h5>
        <h1>Jurgen Klopp</h1>
        <h4 className="text-light">Web Developer</h4>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="Profile Me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
