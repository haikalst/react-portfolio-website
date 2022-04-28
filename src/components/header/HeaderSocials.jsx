import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://facebook.com" rel="noreferrer" target="_blank">
        <FaFacebookF />
      </a>
      <a href="https://twitter.com" rel="noreferrer" target="_blank">
        <FaTwitter />
      </a>
      <a href="https://instagram.com" rel="noreferrer" target="_blank">
        <FaInstagram />
      </a>
      <a href="https://linkedin.com" rel="noreferrer" target="_blank">
        <FaLinkedinIn />
      </a>
      <a href="https://github.com" rel="noreferrer" target="_blank">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
