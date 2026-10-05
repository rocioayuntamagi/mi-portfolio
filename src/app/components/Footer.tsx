"use client";

import { useState } from "react";
import { useInView } from "../hooks/useInView";

export default function Footer() {
  const { ref, isInView } = useInView();
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">("idle");

  const email = "ayuntamagirocio@gmail.com";
  const linkedin = "https://www.linkedin.com/in/rocio-ayunta-magi-2936993b2";
  const whatsapp = "https://wa.me/5491149286536";
  const currentYear = new Date().getFullYear();

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("error");
    }
  }

  return (
    <>
    <footer
      id="contact"
      ref={ref}
      className={`portfolio-section portfolio-contact ${
        isInView ? "is-visible" : ""
      }`}
    >
      <div className="portfolio-footer-inner">

        <h2 className="portfolio-section-title">Contacto</h2>

        <p className="portfolio-contact-text">
          ¿Tenés un proyecto en mente o querés charlar? ¡Escribime!
        </p>

        <div className="portfolio-contact-links">
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn contact-btn-linkedin"
          >
            <i className="fab fa-linkedin" />
            LinkedIn
          </a>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn contact-btn-whatsapp"
          >
            <i className="fab fa-whatsapp" />
            WhatsApp
          </a>

          <button
            type="button"
            onClick={copyEmail}
            className="contact-btn contact-btn-email"
          >
            <i className={copyStatus === "copied" ? "fas fa-check" : "fas fa-envelope"} aria-hidden="true" />
            <span aria-live="polite">
              {copyStatus === "copied" ? "¡Copiado!" : copyStatus === "error" ? "No se pudo copiar" : "Copiar email"}
            </span>
          </button>
        </div>

        <div className="footer-divider" />

        <p className="footer-name">
          Rocio Ayunta Magi <span className="accent-dot">| Developer</span>
        </p>

        <p className="footer-copy">
          © {currentYear} Rocio Ayunta Magi. Todos los derechos reservados.
        </p>

      </div>
    </footer>
    <nav className="contact-dock" aria-label="Contacto rápido">
      <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="contact-btn contact-btn-whatsapp">
        <i className="fab fa-whatsapp" aria-hidden="true" />
        WhatsApp
      </a>
      <a href={linkedin} target="_blank" rel="noopener noreferrer" className="contact-btn contact-btn-linkedin">
        <i className="fab fa-linkedin" aria-hidden="true" />
        LinkedIn
      </a>
      <a href={`mailto:${email}`} className="contact-btn contact-btn-email">
        <i className="fas fa-envelope" aria-hidden="true" />
        Email
      </a>
    </nav>
    </>
  );
}