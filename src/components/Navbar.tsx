import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [tab, setTab] = useState("");

  // Add scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about-me", "contact"];

      // Check which section is currently in view
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Check if section is in viewport (adjust threshold as needed)
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            setTab(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 h-[15vh] pointer-events-none navbar w-screen z-50">
      <div className="navbar-start pointer-events-none ml-8 items-start flex flex-col z-10">
        <p className="text-md text-left">Mohammed Alrassas </p>
        <p className="text-sm text-left">Front End Developer</p>
      </div>

      <div className="pointer-events-auto navbar-center">
        <div className="max-w-sm mx-auto bg-white/20 backdrop-blur-lg border border-white/20 w-50 h-12 space-x-3 rounded-4xl justify-center items-center flex z-10">
          <motion.div
            className="absolute glass -z-10 w-27 h-12 rounded-4xl"
            initial={{
              opacity: 0,
            }}
            animate={{
              x: tab === "about-me" ? -41 : tab === "contact" ? 61 : 0,
              scaleX: tab === "about-me" ? 1 : tab === "contact" ? 0.85 : 0,
              backgroundColor: "var(--color-primary)",
              opacity: tab === "about-me" || tab === "contact" ? 1 : 0,
            }}
          />
          <a
            href="#about-me"
            onClick={() => setTab("about-me")}
            className={`btn rounded-4xl ${tab === "about-me" ? "" : "btn-ghost"}`}
          >
            About me
          </a>
          <a
            href="#contact"
            onClick={() => setTab("contact")}
            className={`btn rounded-4xl ${tab === "contact" ? "" : "btn-ghost"}`}
          >
            Contact
          </a>
        </div>
      </div>
      <div className="navbar-end top-5 pointer-events-auto ml-5 justify-center text-left items-start z-10">
        <button className="btn btn-circle">HIII</button>
      </div>
    </div>
  );
};

export default Navbar;
