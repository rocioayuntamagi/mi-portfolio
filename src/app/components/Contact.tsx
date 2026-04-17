"use client";

import { useInView } from "../hooks/useInView";

export default function Contact() {

  const { ref, isInView } = useInView();

  return (
    <section
      id="contact"
      ref={ref}
      className={`portfolio-section portfolio-contact ${
        isInView ? "is-visible" : ""
      }`}
    >
      <h2 className="portfolio-section-title">Contacto</h2>

      <p className="portfolio-contact-text">
        Si querés ponerte en contacto conmigo, podés escribirme por correo o
        a través de mis redes.
      </p>

      <div className="portfolio-contact-links">
        <a href="mailto:tuemail@gmail.com" className="contact-btn">
          Enviar Email
        </a>
        <a href="https://www.linkedin.com" target="_blank" className="contact-btn">
          LinkedIn
        </a>
      </div>
    </section>
  );
}