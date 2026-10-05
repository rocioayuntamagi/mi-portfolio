"use client";

import { skills } from "../data/skills";
import { useInView } from "../hooks/useInView";
 
export default function Skills() {

  const { ref, isInView } = useInView();

  return (
    <section
      id="skills"
      ref={ref}
      className={`portfolio-section portfolio-skills ${
        isInView ? "is-visible" : ""
      }`}
    >
      <h2 className="portfolio-section-title">Stack Tecnológico</h2>
      <p className="skills-hint">Tocá o seleccioná una herramienta para ver más</p>
      <div className="portfolio-skills-list">
        {skills.map((skill) => (
          <details key={skill.name} className="portfolio-skill">
            <summary>
              <span aria-hidden="true">{skill.emoji}</span>
              <span>{skill.name}</span>
            </summary>
            <p>{skill.description}</p>
          </details>
        ))}
      </div>
    </section>
  );
}