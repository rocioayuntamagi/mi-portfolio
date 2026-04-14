import { skills } from "../data/skills";
 
export default function Skills() {
  return (
    <section id="skills" className="portfolio-section portfolio-skills">
      <h2 className="portfolio-section-title">Habilidades</h2>
      <div className="portfolio-skills-list">
        {skills.map((skill) => (
          <div key={skill.name} className="portfolio-skill" data-description={skill.description}>
            <span title={skill.name}>{skill.emoji}</span>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}