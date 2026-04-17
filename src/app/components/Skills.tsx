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
      <p className="skills-hint">Pasá el mouse sobre cada herramienta para ver más</p>
      <div className="portfolio-skills-list">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="portfolio-skill"
            data-description={skill.description}
          >
            <span title={skill.name}>{skill.emoji}</span>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}