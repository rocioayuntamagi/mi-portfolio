import { projects } from "../data/projects";
 
export default function Projects() {
  return (
    <section id="projects" className="portfolio-section portfolio-projects">
      <h2 className="portfolio-section-title">Proyectos</h2>
      <div className="portfolio-project-cards">
        {projects.map((project) => (
          <div key={project.title} className="portfolio-project-card">
            <h3 className="portfolio-project-title">{project.title}</h3>
            <p className="portfolio-project-desc">{project.description}</p>
            <a href={project.link} className="portfolio-project-link">
              Ver más
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}