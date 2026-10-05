"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import { createPortal } from "react-dom";
import { useInView } from "../hooks/useInView";

export default function About() {
  const { ref, isInView } = useInView();
  const [contactOpen, setContactOpen] = useState(false);
  const contactLinkRef = useRef<HTMLAnchorElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contactOpen) return;

    const previousOverflow = document.body.style.overflow;
    const trigger = contactLinkRef.current;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const media = window.matchMedia("(max-width: 768px)");
    function onChange(event: MediaQueryListEvent) {
      if (!event.matches) setContactOpen(false);
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setContactOpen(false);
      if (event.key !== "Tab") return;

      const focusable = panelRef.current?.querySelectorAll<HTMLElement>("button, a[href]");
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    media.addEventListener("change", onChange);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      media.removeEventListener("change", onChange);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      trigger?.focus();
    };
  }, [contactOpen]);

  function openContact(event: MouseEvent<HTMLAnchorElement>) {
    if (!window.matchMedia("(max-width: 768px)").matches) return;
    event.preventDefault();
    setContactOpen(true);
  }

  return (
    <>
    <section
      id="about"
      ref={ref}
      className={`portfolio-section portfolio-about ${
        isInView ? "is-visible" : ""
      }`}
    >
      <h2 className="portfolio-section-title">Sobre mí</h2>

      <h3 className="about-subtitle">
  Full Stack Developer formada en la Diplomatura Universitaria en Programación Full Stack
</h3>

<h4 className="about-subtitle-detail">
  (UTN Buenos Aires)
</h4>

      <div className="about-experience">
        <div className="journey-step experience-card">
          <div className="experience-header">
            <h4>The Cave — Full Stack Developer Jr</h4>
            <span className="experience-period">2026 – Actualidad</span>
          </div>
          <ul className="experience-list">
            <li>Desarrollo de funcionalidades frontend con React.</li>
            <li>Implementación de APIs REST con Node.js.</li>
            <li>Integración con bases de datos MongoDB.</li>
            <li>Participación en proyectos reales de clientes.</li>
            <li>Trabajo colaborativo con el equipo de desarrollo.</li>
          </ul>
        </div>
      </div>

      <p className="about-text">
       Integro mi experiencia administrativa con el desarrollo web para crear interfaces modernas, responsivas y centradas en el usuario. Trabajo con buenas prácticas, componentes reutilizables y soluciones claras que aportan valor real a los proyectos.
      </p>

      <ul className="about-strengths">
        <li>🎨 Diseño limpio y moderno</li>
        <li>⚡ Resolución rápida de problemas</li>
        <li>🤝 Comunicación clara y trabajo colaborativo</li>
      </ul>

      <div className="about-journey">
  <div className="journey-step">
    <h4>Descubrimiento</h4>
    <p>
      Me acerqué al desarrollo web por curiosidad y terminé encontrando un espacio donde
      podía combinar creatividad, lógica y diseño.
    </p>
  </div>

  <div className="journey-step">
    <h4>Formación técnica</h4>
    <p>
      Inicié mi formación formal y construí bases sólidas en programación, estructura,
      buenas prácticas y herramientas modernas.
    </p>
  </div>

  <div className="journey-step">
    <h4>Construcción de interfaces</h4>
    <p>
      Me enfoqué en crear interfaces limpias, responsivas y orientadas a la experiencia
      del usuario, integrando diseño y funcionalidad.
    </p>
  </div>

  <div className="journey-step">
    <h4>Desarrollo continuo</h4>
    <p> Hoy sigo creciendo como Full Stack Developer, aprendiendo nuevas tecnologías y
      fortaleciendo mi estilo profesional. </p>
  </div>
</div>

      <a href="#contact" ref={contactLinkRef} onClick={openContact} className="about-cta">Trabajemos juntos</a>
    </section>
    {contactOpen && typeof document !== "undefined" && createPortal(
      <div
        className="about-contact-overlay"
        onClick={(event) => {
          if (event.target === event.currentTarget) setContactOpen(false);
        }}
      >
        <div ref={panelRef} className="about-contact-panel" role="dialog" aria-modal="true" aria-labelledby="about-contact-title">
          <button ref={closeRef} type="button" className="about-contact-close" onClick={() => setContactOpen(false)}>
            Cerrar
          </button>
          <h2 id="about-contact-title">Trabajemos juntos</h2>
          <a href="https://wa.me/5491149286536" target="_blank" rel="noopener noreferrer" className="contact-btn contact-btn-whatsapp">
            <i className="fab fa-whatsapp" aria-hidden="true" />
            WhatsApp
          </a>
          <a href="https://www.linkedin.com/in/rocio-ayunta-magi-2936993b2" target="_blank" rel="noopener noreferrer" className="contact-btn contact-btn-linkedin">
            <i className="fab fa-linkedin" aria-hidden="true" />
            LinkedIn
          </a>
          <a href="mailto:ayuntamagirocio@gmail.com" className="contact-btn contact-btn-email">
            <i className="fas fa-envelope" aria-hidden="true" />
            Email
          </a>
        </div>
      </div>,
      document.body
    )}
    </>
  );
}