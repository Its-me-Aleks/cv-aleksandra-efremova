import React, { useEffect, useState } from "react";
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
import { Contact } from "./components/Contact";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Simulate loading time for assets
    window.addEventListener("load", () => {
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

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
        <div data-aos="fade-up">
          <Contact />
        </div>
      </main>
      <FloatingButtons />
      <Footer />
    </div>
  );
}

export default App;
