"use client";

import { useInView } from "../hooks/useInView";

export default function Projects() {

  const { ref, isInView } = useInView();

  return (
    <section id="projects" className="portfolio-section portfolio-projects">
      <h2 className="portfolio-section-title">Proyectos</h2>

      <div className="projects-grid">

        {/* Proyecto 1 */}
        <div className="project-card-wrapper">
          <a href="https://tu-demo-o-preview.com" target="_blank" rel="noopener noreferrer" className="project-card">
            <span className="project-status">En desarrollo</span>
            <h3>Chat en tiempo real</h3>
            <p> Aplicación de mensajería enfocada en comunicación en tiempo real, manejo de estados y experiencia fluida.</p>
            <div className="project-tags">
              <span>React</span>
              <span>Node</span>
              <span>WebSockets</span>
            </div>
          </a>

          <a href="https://github.com/tuUsuario/tuRepo" target="_blank" rel="noopener noreferrer" className="project-github">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>

        {/* Proyecto 2 */}
        <div className="project-card-wrapper">
          <a href="https://tu-demo-o-preview.com" target="_blank" rel="noopener noreferrer" className="project-card">
            <span className="project-status">En desarrollo</span>
            <h3>E‑commerce estilo Mercado Libre</h3>
            <p> Plataforma de compra/venta con catálogo, filtros y carrito, enfocada en navegación clara y estructura sólida.</p>
            <div className="project-tags">
              <span>React</span>
              <span>Node</span>
              <span>APIs</span>
            </div>
          </a>

          <a href="https://github.com/tuUsuario/tuRepo" target="_blank" rel="noopener noreferrer" className="project-github">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>

        {/* Proyecto 3 */}
        <div className="project-card-wrapper">
          <a href="https://tu-demo-o-preview.com" target="_blank" rel="noopener noreferrer" className="project-card">
            <span className="project-status">En desarrollo</span>
            <h3>Sistema administrativo</h3>
            <p> Proyecto personal orientado a resolver necesidades reales de gestión, con paneles, formularios y flujo de datos.</p>
            <div className="project-tags">
              <span>React</span>
              <span>Node</span>
              <span>Base de datos</span>
            </div>
          </a>

          <a href="https://github.com/tuUsuario/tuRepo" target="_blank" rel="noopener noreferrer" className="project-github">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>

      </div>
    </section>
  );
}