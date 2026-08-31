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
    const scrollElement = document.querySelector("[data-scroll-container]") as
      | HTMLElement
      | null;

    if (!scrollElement) return;

    const scroll = new LocomotiveScroll({
      el: scrollElement,
      smooth: true,
    } as any);

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-clip">
      <Navbar />
      <InteractiveBackground />

      <main className="flex flex-col z-10 items-center">
        <Hero />
        <SecondTextAnim />
        <MyProjects />
        <Introduction />
        <AboutMe />
        <FirstTextAnim />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;
