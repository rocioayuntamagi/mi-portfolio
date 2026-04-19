import Header   from "@/app/components/Header";
import Hero     from "@/app/components/Hero";
import Skills   from "@/app/components/Skills";
import About    from "@/app/components/About";
import Projects from "@/app/components/Projects";
import Contact  from "@/app/components/Contact";
import AnimateOnScroll from "@/app/components/AnimateOnScroll";
 
export default function Home() {
  return (
    <div className="portfolio-root">
      <Header />
      <AnimateOnScroll />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
 