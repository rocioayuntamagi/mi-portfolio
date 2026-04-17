
"use client";

import { useInView } from "../hooks/useInView";

export default function Projects() {

  const { ref, isInView } = useInView();

  return (
    <section
      id="projects"
      ref={ref}
      className={`portfolio-section portfolio-projects ${
        isInView ? "is-visible" : ""
      }`}
    >
      <h2 className="portfolio-section-title">Proyectos</h2>

      <div className="portfolio-projects-list">
        <div className="project-card">
          <h3>Proyecto 1</h3>
          <p>Descripción breve del proyecto.</p>
        </div>

        <div className="project-card">
          <h3>Proyecto 2</h3>
          <p>Descripción breve del proyecto.</p>
        </div>

        <div className="project-card">
          <h3>Proyecto 3</h3>
          <p>Descripción breve del proyecto.</p>
        </div>
      </div>
    </section>
  );
}