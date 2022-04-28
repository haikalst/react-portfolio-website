import React from "react";
import "./contact.css";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_9guda79",
      "template_s3ktcnl",
      form.current,
      "R7kuHFHV0tnPBoqr4"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Yuk Kenalan dan Diskusi</h5>
      <h2>Kontak Kami</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <FaEnvelope className="contact__option-icon" />
            <h4>Email</h4>
            <h5>saparhaikal@gmail.com</h5>
            <a
              href="mailto:saparhaikal@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Kirim Pesan
            </a>
          </article>
          <article className="contact__option">
            <FaFacebookMessenger className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Haikal Saparudin</h5>
            <a
              href="https://m.me/haikalsaparudin"
              target="_blank"
              rel="noreferrer"
            >
              Kirim Pesan
            </a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+62 822-4042-6843</h5>
            <a
              href="https://api.whatsapp.com/send?phone=6282240426843"
              target="_blank"
              rel="noreferrer"
            >
              Kirim Pesan
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Nama Anda" required />
          <input type="email" name="email" placeholder="Email Anda" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Pesan Anda"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Kirim Pesan
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
