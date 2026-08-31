import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AboutMeCard from "../components/AboutMeCard";

const MyProjects = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x2 = useTransform(scrollYProgress, [0.15, 0.3], ["0%", "-100%"]);
  const y3 = useTransform(scrollYProgress, [0.45, 0.6], ["-100%", "0%"]);
  const x4 = useTransform(scrollYProgress, [0.75, 0.9], ["-400%", "-300%"]);

  const topWidth = useTransform(scrollYProgress, [0, 0.25], ["0%", "100%"]);
  const rightHeight = useTransform(
    scrollYProgress,
    [0.25, 0.5],
    ["0%", "100%"],
  );
  const bottomWidth = useTransform(
    scrollYProgress,
    [0.5, 0.75],
    ["0%", "100%"],
  );
  const leftHeight = useTransform(scrollYProgress, [0.75, 1], ["0%", "100%"]);

  return (
    <section
      ref={targetRef}
      className="relative h-[300vh] bg-[#111827] text-white"
    >
      <div className="sticky top-0 flex h-screen w-screen items-center overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 h-0.5 bg-orange-500"
          style={{ width: topWidth }}
        />
        <motion.div
          className="absolute top-0 right-0 w-1.5 bg-orange-500"
          style={{ height: rightHeight }}
        />
        <motion.div
          className="absolute bottom-0 right-0 h-0.5 bg-orange-500"
          style={{ width: bottomWidth }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-1.5 bg-orange-500"
          style={{ height: leftHeight }}
        />

        <motion.div className="bg-[radial-gradient(circle_at_top,rgba(251,146,60,0.25),transparent_40%),radial-gradient(circle_at_bottom,rgba(34,197,94,0.18),transparent_32%)]" />

        <AboutMeCard
          title={"About Me"}
          content={
            "I'm Mohammed, a junior frontend developer from Yemen who fell in love with coding after discovering Framer Motion animations."
          }
          gradient={"from-blue-800/80 via-orange-800/80 to-green-900/80"}
        />

        <AboutMeCard
          style={{ x: x2 }}
          title={"Why?"}
          content={
            "What started as exploring how do they make websites move like that? turned into a deep dive into React TypeScript and Framer Motion. Now I build smooth, pixel-perfect web experiences that people actually enjoy using."
          }
          gradient={"from-blue-950/80 to-green-950/80"}
        />

        <AboutMeCard
          style={{ x: "-200%", y: y3 }}
          title={"My Vision"}
          content={
            "I believe great frontend work isn't just about functionality—it's about making every interaction feel intentional and delightful. Currently expanding into full-stack development to understand the bigger picture."
          }
          gradient={"from-black/80 to-blue-950/80"}
        />

        <AboutMeCard
          style={{ x: x4 }}
          title={"My Skills"}
          content={
            "React • TailwindCSS • Framer Motion • Back-End Python Development (Django and Flask) • MERN Stack Development • Bootstrap • Git Version Control • Web Socket with SocketIO • 70 WPM touch typing  with the keyboard • AI Assistant Coding (Not Vibe Coding) • Also speaking Arabic natively and fluent in English with a little of Spanish and Hindi/Urdu"
          }
          gradient={"from-orange-800/80 to-black/80"}
        />
      </div>
    </section>
  );
};

export default MyProjects;
