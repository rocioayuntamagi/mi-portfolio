import Header   from "@/app/components/Header";
import Hero     from "@/app/components/Hero";
import Skills   from "@/app/components/Skills";
import About    from "@/app/components/About";
import Projects from "@/app/components/Projects";
import Contact  from "@/app/components/Contact";
 
export default function Home() {
  return (
    <div className="portfolio-root">
      <Header />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
 