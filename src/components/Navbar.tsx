import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { themeChange } from "theme-change";

const Navbar = () => {
  const [tab, setTab] = useState("about-me");
  const [theme, setTheme] = useState("luxury");

  useEffect(() => {
    themeChange(false);
  }, []);

  const handleSwap = () => {
    if (theme === "light") {
      setTheme("luxury");
    } else {
      setTheme("light");
    }

    console.log(theme);
  };

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
            animate={{
              x: tab === "about-me" ? -41 : 61,
              scaleX: tab === "about-me" ? 1 : 0.85,
              backgroundColor: "var(--color-primary)",
            }}
          />
          <button
            onClick={() => setTab("about-me")}
            className={`btn rounded-4xl ${tab === "about-me" ? "" : "btn-ghost"}`}
          >
            About me
          </button>
          <button
            onClick={() => setTab("contact")}
            className={`btn rounded-4xl ${tab === "about-me" ? "btn-ghost" : ""}`}
          >
            Contact
          </button>
        </div>
      </div>
      <div className="navbar-end top-5 pointer-events-auto ml-5 justify-center text-left items-start z-10">
        <button
          className="btn btn-circle"
          data-set-theme={theme}
          onClick={handleSwap}
        >
          {theme === "light" ? (
            <Sun className="pointer-events-none" />
          ) : (
            <Moon className="pointer-events-none" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
