"use client";

import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="portfolio-header-main">
      <div className="portfolio-header-content">

        <h1 className="portfolio-header-name">
          <span className="header-name-text">Rocio Ayunta Magi</span>
          <span className="header-separator"> | </span>
          <span className="accent-dot">Developer</span>
        </h1>

        {/* Nav escritorio */}
        <nav className="portfolio-nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#about">Sobre mí</a></li>
            <li><a href="#projects">Proyectos</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav>

        {/* Botón hamburguesa */}
        <button
          ref={menuButtonRef}
          type="button"
          className={`hamburger ${menuOpen ? "is-open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span />
          <span />
          <span />
        </button>

      </div>

      {/* Menú móvil */}
      <nav id="mobile-menu" className="portfolio-nav-mobile" hidden={!menuOpen} aria-label="Navegación móvil">
        <ul>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
          <li><a href="#about" onClick={closeMenu}>Sobre mí</a></li>
          <li><a href="#projects" onClick={closeMenu}>Proyectos</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contacto</a></li>
        </ul>
      </nav>

    </header>
  );
}