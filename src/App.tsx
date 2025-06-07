import React, { useEffect } from "react";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { Interests } from "./components/Interests";
import { Footer } from "./components/Footer";
import { FloatingButtons } from "./components/FloatingButtons";
import { ThemeToggle } from "./components/ThemeToggle";
import { Projects } from "./components/Projects";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div data-aos="fade-up">
          <About />
        </div>
        <div data-aos="fade-up">
          <Experience />
        </div>
        <div data-aos="fade-up">
          <Education />
        </div>
        <div data-aos="fade-up">
          <Skills />
        </div>
        <div data-aos="fade-up">
          <Projects />
        </div>
        <div data-aos="fade-up">
          <Interests />
        </div>
      </main>
      <FloatingButtons />
      <Footer />
    </div>
  );
}

export default App;
