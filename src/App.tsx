import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Lenis from "lenis";
import Work from "./sections/Work";

const App = () => {
  // Initialize Lenis
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <main className="h-[200vh] px-[19%]">
        <Hero />
        <Work />
      </main>
    </div>
  );
};

export default App;
