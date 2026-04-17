"use client";

import { useInView } from "../hooks/useInView";

export default function About() {
  const { ref, isInView } = useInView();

  return (
    <section
      id="about"
      ref={ref}
      className={`portfolio-section portfolio-about ${
        isInView ? "is-visible" : ""
      }`}
    >
      <h2 className="portfolio-section-title">Sobre mí</h2>

      <h3 className="about-subtitle">
        Full Stack Developer con enfoque en interfaces modernas y soluciones claras.
      </h3>

      <p className="about-text">
        Combino mi experiencia en áreas administrativas y analíticas con el desarrollo web,
        creando interfaces limpias, funcionales y orientadas a la experiencia del usuario.
        Me motiva resolver problemas de forma eficiente y construir productos que se sientan
        intuitivos y visualmente atractivos.
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

      <a href="#contact" className="about-cta">Trabajemos juntos</a>
    </section>
  );
}