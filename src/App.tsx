import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Navbar from "./components/Navbar";
import InteractiveBackground from "./components/InteractiveBackground";
import Hero from "./sections/Hero";
import FirstTextAnim from "./sections/FirstTextAnim";
import SecondTextAnim from "./sections/SecondTextAnim";
import MyProjects from "./sections/MyProjects";
import Introduction from "./sections/Introduction";
import AboutMe from "./sections/AboutMe";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll();
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-clip">
      <Navbar />
      <InteractiveBackground />

      <main className="flex flex-col z-10 items-center">
        <Hero />
        <FirstTextAnim />
        <SecondTextAnim />
        <MyProjects />
        <Introduction />
        <AboutMe />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;
