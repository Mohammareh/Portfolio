import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import WorkCard from "./WorkCard"; // or your card component

const MyProjects = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["50%", "-100%"]);

  const projects = [
    {
      title: "Jobify",
      content: "A dashboard that fetches jobs...",
      img: "./src/assets/Jobify.png",
      gradient: "orange-black",
    },
    {
      title: "Portfolio",
      content: "My portfolio site...",
      img: "./src/assets/Jobify.png",
      gradient: "purple-black",
    },
    {
      title: "E-commerce",
      content: "A full e-commerce platform...",
      img: "./src/assets/Jobify.png",
      gradient: "green-blue",
    },
    {
      title: "Chat App",
      content: "Real-time chat application...",
      img: "./src/assets/Jobify.png",
      gradient: "yellow-orange",
    },
  ];

  const projectIndex = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75],
    [0, 1, 2, 3],
  );

  return (
    <section ref={targetRef} className="relative h-[200vh] bg-base-300">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden w-screen">
        <motion.div style={{ x }} className="flex">
          {projects.map((project, index) => (
            <WorkCard
              key={index}
              title={project.title}
              content={project.content}
              img={project.img}
              gradient={project.gradient}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MyProjects;
