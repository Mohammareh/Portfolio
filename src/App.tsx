import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Work from "./sections/Work";
import Contact from "./sections/Contact";
import { Footer } from "./sections/Footer";
import InteractiveBackground from "./components/InteractiveBackground";
import AboutMe from "./sections/AboutMe";
import OhReallyHuh from "./sections/OhReallyHuh";
import MyProjects from "./components/MyProjects";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll();
  }, []);

  return (
    <div className="min-h-screen relative">
      <Navbar />
      <InteractiveBackground />

      <main className="flex flex-col z-10 items-center">
        <Hero />
        <Work />
        <AboutMe />
        <OhReallyHuh />
        <MyProjects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;
