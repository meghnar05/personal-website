import Navbar from "@/components/Navbar";
import HomePage from "@/components/HomePage";
import About from "@/components/About";
import Experiences from "@/components/Experiences";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main>
      {/* <Navbar /> */}
      {/* Add id to each section for navigation */}
      <section id="home">
        <HomePage />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experiences />
      </section>
      <section id="projects">
        <Projects />
      </section>
      {/* Smooth scrolling */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </main>
  );
}
