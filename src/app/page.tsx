import Header   from "@/app/components/Header";
import Hero     from "@/app/components/Hero";
import Skills   from "@/app/components/Skills";
import About    from "@/app/components/About";
import Projects from "@/app/components/Projects";
import AnimateOnScroll from "@/app/components/AnimateOnScroll";
import Footer from "@/app/components/Footer";
 
export default function Home() {
  return (
    <div className="portfolio-root">
      <Header />
      <AnimateOnScroll />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}
 