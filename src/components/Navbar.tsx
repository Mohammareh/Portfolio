import { motion } from "framer-motion";
import { ArrowUpRight, Link } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [tab, setTab] = useState("");

  return (
    <nav className="fixed top-0 left-0 h-[15vh] pointer-events-none navbar w-screen z-50">
      <div className="navbar-start pointer-events-none ml-8 items-start flex flex-col z-10">
        <p className="text-md text-left">Mohammed Alrassas </p>
        <p className="text-sm text-left">Front End Developer</p>
      </div>

      <div className="pointer-events-auto navbar-center">
        <div className="max-w-sm mx-auto bg-white/20 backdrop-blur-lg border border-white/20 w-45 h-12 space-x-3 rounded-4xl justify-center items-center flex z-10">
          <motion.div
            className="absolute glass -z-10 w-25 h-12 rounded-4xl"
            initial={{
              opacity: 0,
            }}
            animate={{
              x:
                tab === "work"
                  ? "-3.01rem"
                  : tab === "about-me"
                    ? "2.85rem"
                    : 0,
              scaleX: tab === "work" ? 0.74 : tab === "about-me" ? 1 : 0,
              backgroundColor: "var(--color-primary)",
              opacity: tab === "work" || tab === "about-me" ? 1 : 0,
            }}
          />
          <a
            href="#work"
            onClick={() => setTab("work")}
            className={`btn rounded-4xl ${tab === "work" ? "" : "btn-ghost"}`}
          >
            Work
          </a>
          <a
            href="#about-me"
            onClick={() => setTab("about-me")}
            className={`btn rounded-4xl ${tab === "about-me" ? "" : "btn-ghost"}`}
          >
            About Me
          </a>
        </div>
      </div>
      <div className="navbar-end top-5 pointer-events-auto ml-5 justify-around text-left items-start z-10">
        {/* For TSX uncomment the commented types below */}
        <button
          className="btn btn-circle btn-ghost md:hidden"
          popoverTarget="popover-1"
          style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}
        >
          <Link />
        </button>

        <ul
          className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm md:hidden"
          popover="auto"
          id="popover-1"
          style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */}
        >
          <li>
            <a
              href="https://github.com/Mohammareh"
              target="_blank"
              className="btn btn-ghost"
            >
              GitHub <ArrowUpRight />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/mohammed-alrassas-1b707341b"
              target="_blank"
              className="btn btn-ghost"
            >
              LinkedIn <ArrowUpRight />
            </a>
          </li>
        </ul>

        <div className="hidden md:flex">
          <a
            href="https://github.com/Mohammareh"
            target="_blank"
            className="btn btn-ghost"
          >
            GitHub <ArrowUpRight />
          </a>

          <a
            href="https://www.linkedin.com/in/mohammed-alrassas-1b707341b"
            target="_blank"
            className="btn btn-ghost"
          >
            LinkedIn <ArrowUpRight />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
