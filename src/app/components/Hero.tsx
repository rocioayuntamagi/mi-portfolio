"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [showCerts, setShowCerts] = useState(false);
  const certButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!showCerts) return;

    const trigger = certButtonRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setShowCerts(false);
      if (event.key === "Tab") {
        event.preventDefault();
        closeButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      trigger?.focus();
    };
  }, [showCerts]);

  return (
    <>
      <section id="home" className="portfolio-hero">
        <div className="portfolio-hero-inner">

          <div className="portfolio-hero-content">
            <h2 className="portfolio-greeting">Hola!</h2>
            <p className="portfolio-subtitle">Bienvenidos a mi portfolio de</p>
            <p className="portfolio-title">Full Stack Developer</p>

            <div className="portfolio-hero-buttons">
              <a href="#contact" className="portfolio-btn portfolio-btn-accent">
                Contáctame
              </a>

              {/* BOTÓN NUEVO */}
              <button
                ref={certButtonRef}
                type="button"
                className="portfolio-btn portfolio-btn-cert"
                onClick={() => setShowCerts(true)}
              >
                Ver certificaciones
              </button>

              <a
                href="/cv.pdf"
                className="portfolio-btn portfolio-btn-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Descargar CV
              </a>
            </div>
          </div>

          <div className="portfolio-hero-photo">
            <Image
              src="/RocioAyunta.jpeg"
              alt="Foto de perfil de Rocio Ayunta Magi, Full Stack Developer"
              className="portfolio-photo"
              width={300}
              height={300}
              priority
            />
          </div>

        </div>
      </section>

      {/* POPUP DE CERTIFICACIONES */}
      {showCerts && (
        <div className="cert-modal-overlay" onClick={() => setShowCerts(false)}>
          <div
            className="cert-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cert-title"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 id="cert-title" className="cert-title">Certificaciones UTN</h2>
            <button ref={closeButtonRef} type="button" className="cert-close-btn" onClick={() => setShowCerts(false)}>
              Cerrar
            </button>

            <div className="cert-grid">
              <div className="cert-item">
                <img src="/cert-front.png" alt="Diploma Frontend UTN" />
                <p>Diplomatura en Desarrollo Frontend – UTN</p>
              </div>

              <div className="cert-item">
                <img src="/cert-back.png" alt="Diploma Backend UTN" />
                <p>Diplomatura en Desarrollo Backend – UTN</p>
              </div>

              <div className="cert-item">
                <img src="/cert-fullstack.png" alt="Diploma Full Stack UTN" />
                <p>Diplomatura en Programación Full Stack – UTN</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
