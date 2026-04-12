export default function Home() {
  return (
    <div className="portfolio-root">
      {/* Header */}
      <header className="portfolio-header-main">
        <div className="portfolio-header-content">
          <h1 className="portfolio-header-name"> Rocio Ayunta Magi | <span className="accent-dot"> Developer</span></h1>
          <nav className="portfolio-nav">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">Sobre mí</a></li>
              <li><a href="#projects">Proyectos</a></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero principal */}
    <section id="home" className="portfolio-hero">
  <div className="portfolio-hero-inner">

    <div className="portfolio-hero-content">
      <h2 className="portfolio-greeting">Hola!</h2>
      <p className="portfolio-subtitle">Bienvenido a mi portfolio de</p>
      <p className="portfolio-title">Desarrollo Full Stack Developer</p>

      <div className="portfolio-hero-buttons">
        <a href="#contact" className="portfolio-btn portfolio-btn-accent">Contáctame</a>
        <a href="/cv.pdf" className="portfolio-btn portfolio-btn-outline" download>Descargar CV</a>
      </div>
    </div>

    <div className="portfolio-hero-photo">
      <img src="/profile.jpg" alt="Foto de Rocio" className="portfolio-photo" />
    </div>

  </div>
</section>

      {/* Habilidades */}
      <section className="portfolio-section portfolio-skills">
        <h2 className="portfolio-section-title">Habilidades</h2>
        <div className="portfolio-skills-list">
          <div className="portfolio-skill"><span title="HTML">🌐</span><p>HTML</p></div>
          <div className="portfolio-skill"><span title="CSS">🎨</span><p>CSS</p></div>
          <div className="portfolio-skill"><span title="JavaScript">⚡</span><p>JS</p></div>
          <div className="portfolio-skill"><span title="React">⚛️</span><p>React</p></div>
          <div className="portfolio-skill"><span title="Node.js">🟢</span><p>Node</p></div>
          <div className="portfolio-skill"><span title="Git">🔗</span><p>Git</p></div>
          <div className="portfolio-skill"><span title="GitHub">🐙</span><p>GitHub</p></div>
        </div>
      </section>

      {/* Sobre mí */}
      <section id="about" className="portfolio-section portfolio-about">
        <h2 className="portfolio-section-title">Sobre mí</h2>
        <p className="portfolio-section-text">
          Soy Rocio, Full Stack Developer apasionada por crear soluciones digitales modernas y eficientes. Me especializo en tecnologías web y disfruto trabajar en proyectos que desafían mi creatividad y habilidades técnicas.
        </p>
      </section>

      {/* Proyectos */}
      <section id="projects" className="portfolio-section portfolio-projects">
        <h2 className="portfolio-section-title">Proyectos</h2>
        <div className="portfolio-project-cards">
          <div className="portfolio-project-card">
            <h3 className="portfolio-project-title">Proyecto 1</h3>
            <p className="portfolio-project-desc">Breve descripción del proyecto, tecnologías usadas, y enlace si aplica.</p>
            <a href="#" className="portfolio-project-link">Ver más</a>
          </div>
          <div className="portfolio-project-card">
            <h3 className="portfolio-project-title">Proyecto 2</h3>
            <p className="portfolio-project-desc">Breve descripción del proyecto, tecnologías usadas, y enlace si aplica.</p>
            <a href="#" className="portfolio-project-link">Ver más</a>
          </div>
          {/* Agrega más tarjetas aquí */}
        </div>
      </section>

      {/* Contacto */}
      <section id="contact" className="portfolio-section portfolio-contact">
        <h2 className="portfolio-section-title">Contacto</h2>
        <form className="portfolio-contact-form">
          <input type="text" name="nombre" placeholder="Tu nombre" className="portfolio-input" required />
          <input type="email" name="email" placeholder="Tu email" className="portfolio-input" required />
          <textarea name="mensaje" placeholder="Tu mensaje" className="portfolio-input" required></textarea>
          <button type="submit" className="portfolio-btn portfolio-btn-accent">Enviar</button>
        </form>
      </section>
    </div>
  );
}
