import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Navbar from "./components/Navbar";
import InteractiveBackground from "./components/InteractiveBackground";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Window from "./sections/Window";
import AboutMe from "./sections/AboutMe";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import FirstTextAnimation from "./sections/FirstTextAnimation";
import SecondTextAnimation from "./sections/SecondTextAnimation";

const App = () => {
  useEffect(() => {
    new LocomotiveScroll();
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-clip data-scroll-container">
      <Navbar />
      <InteractiveBackground />

      <main className="flex flex-col z-10 items-center">
        <Hero />
        <FirstTextAnimation />
        <Projects />
        <Window />
        <AboutMe />
        <SecondTextAnimation />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;
