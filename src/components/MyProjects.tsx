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

  const x2 = useTransform(scrollYProgress, [0.15, 0.3], ["0%", "-100%"]);
  const x3 = useTransform(scrollYProgress, [0.45, 0.6], ["-100%", "-200%"]);
  const x4 = useTransform(scrollYProgress, [0.75, 0.9], ["-200%", "-300%"]);

  const projects = [
    {
      title: "Jobify",
      content:
        "A responsive Job Board web application that aggregates and normalizes job listings fetched from multiple public APIs. Implemented advanced filtering functionality allowing users to filter by salary period, pay range, currency, and location restrictions",
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

  return (
    <section
      ref={targetRef}
      className="relative h-[300vh] bg-base-300 pointer-events-none"
    >
      <div className="sticky h-screen items-center overflow-hidden w-screen top-0 flex">
        <motion.div>
          <WorkCard
            title={projects[0].title}
            content={projects[0].content}
            img={projects[0].img}
            gradient={projects[0].gradient}
          />
        </motion.div>
        <motion.div style={{ x: x2 }}>
          <WorkCard
            title={projects[1].title}
            content={projects[1].content}
            img={projects[1].img}
            gradient={projects[1].gradient}
          />
        </motion.div>
        <motion.div style={{ x: x3 }}>
          <WorkCard
            title={projects[2].title}
            content={projects[2].content}
            img={projects[2].img}
            gradient={projects[2].gradient}
          />
        </motion.div>
        <motion.div style={{ x: x4 }}>
          <WorkCard
            title={projects[3].title}
            content={projects[3].content}
            img={projects[3].img}
            gradient={projects[3].gradient}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default MyProjects;

{
  /* {projects.map((project, index) => (
  <WorkCard
    key={index}
    title={project.title}
    content={project.content}
    img={project.img}
    gradient={project.gradient}
  />
))} */
}
