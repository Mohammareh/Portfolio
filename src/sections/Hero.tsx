import { motion, useScroll, useTransform } from "framer-motion";
import InteractiveBackground from "../components/InteractiveBackground";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 1000], [1, 0.8]);
  const borderRadius = useTransform(scrollY, [0, 1000], ["0%", "20%"]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <div className="h-screen">
      <InteractiveBackground />

      {localStorage.getItem("theme") ||
      document.documentElement.getAttribute("data-theme") === "luxury" ? (
        <motion.img
          className="absolute pointer-events-none top-0 left-0 object-cover w-screen h-screen select-none"
          src="./src/assets/background-dark.jpg"
          alt="Background Image"
          style={{ scale, borderRadius, opacity }}
        />
      ) : (
        <motion.img
          className="absolute pointer-events-none top-0 left-0 object-cover w-screen h-screen select-none"
          src="./src/assets/background.jpg"
          alt="Background Image"
          style={{ scale, borderRadius, opacity }}
        />
      )}
      <div className="h-[15vh]" />

      <motion.div
        // `pointer-events-none` disables mouse and click events for this element, so it won't block interaction with elements behind it.
        className="text-center flex flex-col justify-center items-center z-20 h-[70vh] sm:text-2xl text-white font-bold drop-shadow-lg pointer-events-none space-y-10 select-none"
        style={{ scale, opacity }}
      >
        <h1 className="z-20 block text-3xl sm:text-6xl md:text-8xl font-extrabold bg-linear-to-r from-base-content to-primary bg-clip-text text-transparent mt-5">
          I craft products, interactions & stories.
        </h1>
        <span className="block text-xl text-base-content md:text-2xl font-medium">
          Front End Developer &amp; UI/UX Designer
        </span>

        <motion.div
          animate={{ opacity: [0, 1, 0], y: [0, 20, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
