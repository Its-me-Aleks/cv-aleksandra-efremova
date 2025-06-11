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
    // Initialize AOS with optimized settings for mobile
    AOS.init({
      duration: 800,
      once: true,
      startEvent: "DOMContentLoaded",
      offset: 50,
      delay: 0,
      easing: "ease-out-cubic",
      disable: window.innerWidth < 768, // Disable on mobile for better performance
    });

    // Use requestAnimationFrame to ensure smooth loading state transition
    requestAnimationFrame(() => {
      setIsLoading(false);
    });

    // Fallback timer to ensure loading state is cleared
    const fallbackTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(fallbackTimer);
    };
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
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div data-aos="fade-up" data-aos-duration="800">
          <About />
        </div>
        <div data-aos="fade-up" data-aos-duration="800">
          <Experience />
        </div>
        <div data-aos="fade-up" data-aos-duration="800">
          <Education />
        </div>
        <div data-aos="fade-up" data-aos-duration="800">
          <Skills />
        </div>
        <div data-aos="fade-up" data-aos-duration="800">
          <Projects />
        </div>
        <div data-aos="fade-up" data-aos-duration="800">
          <Interests />
        </div>
        <div data-aos="fade-up" data-aos-duration="800">
          <Contact />
        </div>
      </main>
      <FloatingButtons />
      <Footer />
    </div>
  );
}

export default App;
