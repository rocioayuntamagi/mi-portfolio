import Image from "next/image";
 
export default function Hero() {
  return (
    <section id="home" className="portfolio-hero">
      <div className="portfolio-hero-inner">
 
        <div className="portfolio-hero-content">
          <h2 className="portfolio-greeting">Hola!</h2>
          <p className="portfolio-subtitle">Bienvenidos a mi portfolio de</p>
          <p className="portfolio-title">Full Stack Developer</p>
 
          <div className="portfolio-hero-buttons">
            <a href="#contact" className="portfolio-btn portfolio-btn-accent">
              Contáctame
            </a>
            <a
              href="/cv.pdf"
              className="portfolio-btn portfolio-btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Descargar CV
            </a>
          </div>
        </div>
 
        <div className="portfolio-hero-photo">
          <Image
            src="/RocioAyunta.jpeg"
            alt="Foto de perfil de Rocio Ayunta Magi, Full Stack Developer"
            className="portfolio-photo"
            width={300}
            height={300}
            priority
          />
        </div>
 
      </div>
    </section>
  );
}