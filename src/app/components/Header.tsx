
export default function Header() {
  return (
    <header className="portfolio-header-main">
      <div className="portfolio-header-content">
        <h1 className="portfolio-header-name">
          Rocio Ayunta Magi |{" "}
          <span className="accent-dot">Developer</span>
        </h1>
        <nav className="portfolio-nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#about">Sobre mí</a></li>
            <li><a href="#projects">Proyectos</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}