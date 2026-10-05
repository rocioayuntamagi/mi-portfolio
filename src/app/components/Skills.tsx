"use client";

import { useState } from "react";
import { skills } from "../data/skills";
import { useInView } from "../hooks/useInView";
 
export default function Skills() {

  const { ref, isInView } = useInView();
  const [activeSkill, setActiveSkill] = useState<(typeof skills)[number] | null>(null);

  return (
    <section
      id="skills"
      ref={ref}
      className={`portfolio-section portfolio-skills ${
        isInView ? "is-visible" : ""
      }`}
    >
      <h2 className="portfolio-section-title">Stack Tecnológico</h2>
      <p className="skills-hint">
        <span className="skills-hint-desktop">Pasá el mouse sobre cada herramienta para ver más</span>
        <span className="skills-hint-mobile">Tocá una herramienta para ver más</span>
      </p>
      <div className="portfolio-skills-list">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="portfolio-skill"
            data-description={skill.description}
          >
            <span title={skill.name}>{skill.emoji}</span>
            <p>{skill.name}</p>
            <button
              type="button"
              className="portfolio-skill-mobile-trigger"
              aria-label={`Ver descripción de ${skill.name}`}
              aria-pressed={activeSkill?.name === skill.name}
              onClick={() => setActiveSkill((current) => current?.name === skill.name ? null : skill)}
            >
              <span aria-hidden="true">{skill.emoji}</span>
            </button>
          </div>
        ))}
      </div>
      {activeSkill && <p className="skills-mobile-description" role="status">{activeSkill.description}</p>}
    </section>
  );
}
