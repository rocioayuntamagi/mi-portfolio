"use client";

import { useInView } from "../hooks/useInView";

export default function Projects() {

  const { ref, isInView } = useInView();

  return (
    <section id="projects" className="portfolio-section portfolio-projects">
      <h2 className="portfolio-section-title">Proyectos</h2>
      <p className="projects-hint"> Hacé clic en cada tarjeta para ver el proyecto. Si tocás el ícono de GitHub, vas directo al código.</p>

      <div className="projects-grid">

        {/* Chat en tiempo real */}
        <div className="project-card-wrapper">
          <a href="https://clondechat-six.vercel.app" target="_blank" rel="noopener noreferrer" className="project-card">
            <span className="project-status">En desarrollo</span>
            <h3>Chat en tiempo real</h3>
            <p>Aplicación de mensajería enfocada en comunicación en tiempo real, manejo de estados y experiencia fluida.</p>
            <div className="project-tags">
              <span>React</span>
              <span>Node</span>
              <span>WebSockets</span>
            </div>
          </a>
          <a href="https://github.com/rocioayuntamagi/proyecto-final" target="_blank" rel="noopener noreferrer" className="project-github">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>

        {/* E-commerce */}
        <div className="project-card-wrapper">
          <a href="https://proyecto-final-e-commerce-ayunta.vercel.app" target="_blank" rel="noopener noreferrer" className="project-card">
            <span className="project-status">En desarrollo</span>
            <h3>E‑commerce estilo Mercado Libre</h3>
            <p>Plataforma de compra/venta con catálogo, filtros y carrito, enfocada en navegación clara y estructura sólida.</p>
            <div className="project-tags">
              <span>React</span>
              <span>Node</span>
              <span>APIs</span>
            </div>
          </a>
          <a href="https://github.com/rocioayuntamagi/backend-proyecto-final" target="_blank" rel="noopener noreferrer" className="project-github">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>

        {/* Sistema administrativo */}
        <div className="project-card-wrapper">
          <div className="project-card">
            <span className="project-status">Próximamente</span>
            <h3>Sistema administrativo</h3>
            <p>Proyecto personal orientado a resolver necesidades reales de gestión, con paneles, formularios y flujo de datos.</p>
            <div className="project-tags">
              <span>React</span>
              <span>Node</span>
              <span>Base de datos</span>
            </div>
          </div>
        </div>

        {/* Portfolio */}
        <div className="project-card-wrapper">
          <div className="project-card">
            <span className="project-status">Próximamente</span>
            <h3>Portfolio personal</h3>
            <p>Este mismo portfolio — diseñado y desarrollado desde cero con Next.js, TypeScript y CSS personalizado.</p>
            <div className="project-tags">
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>CSS</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}