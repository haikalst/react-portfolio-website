import React from "react";
import "./about.css";
import ME from "../../assets/profile-about.png";
import { FaAward } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaSuitcase } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Kenalkan Saya</h5>
      <h2>Tentang Saya</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Gambar Tentang Saya" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Pengalaman</h5>
              <small>3+ Tahun Bekerja</small>
            </article>
            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Klien</h5>
              <small>100+ Pengguna</small>
            </article>
            <article className="about__card">
              <FaSuitcase className="about__icon" />
              <h5>Proyek</h5>
              <small>50+ Disetujui</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis est
            eaque, labore debitis neque provident et repellat optio ab
            dignissimos quod, corporis nisi quas voluptate. Accusantium, quam!
          </p>
          <a href="#contact" className="btn btn-primary">
            Diskusi
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
