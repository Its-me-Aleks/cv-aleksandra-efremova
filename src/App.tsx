import { Header } from "./components/Header";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { Interests } from "./components/Interests";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <About />
        <Experience />
        <Education />
        <Skills />
        <Interests />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
