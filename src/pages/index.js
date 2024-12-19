import Navbar from "@/components/Navbar";
import HomePage from "@/components/HomePage";
import About from "@/components/About";
import Experiences from "@/components/Experiences";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HomePage />
      <About />
      <Experiences />
      <Projects />
    </main>
  );
}
