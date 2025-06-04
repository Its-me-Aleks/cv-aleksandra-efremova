import { Header } from "./components/Header";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { Interests } from "./components/Interests";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import Iridescence from "./components/Iridescence";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Iridescence
        color={[0, 1, 1]}
        mouseReact={false}
        amplitude={0.1}
        speed={1.0}
      />
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
