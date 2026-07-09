import Nav from "./components/Nav";
import Hero from "./components/Hero";
import { About, Experience, Education, Certifications } from "./components/Sections";
import { Projects } from "./components/Projects";
import { Skills, Contact, Footer } from "./components/SkillsContact";

export default function App() {
  return (
    <div className="bg-grid min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
