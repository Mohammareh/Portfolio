import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import WorkCard from "../components/WorkCard"; // or your card component
import jobifyImg from "../assets/Jobify.png";
import portfolioImg from "../assets/portfolio.png";
import threejsImg from "../assets/threejs.png";
import todoImg from "../assets/todo.png";
import bgImg from "../assets/background-dark.jpg";

const MyProjects = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0.15, 0.3], ["0%", "-100%"]);
  const x2 = useTransform(scrollYProgress, [0.45, 0.6], ["-100%", "-200%"]);
  const x3 = useTransform(scrollYProgress, [0.75, 0.9], ["-200%", "-300%"]);

  const projects = [
    {
      title: "Jobify",
      content:
        "A responsive Job Board web application that aggregates and normalizes job listings fetched from multiple public APIs. Implemented advanced filtering functionality allowing users to filter by salary period, pay range, currency, and location restrictions",
      img: jobifyImg,
      gradient: "from-orange-800/90 to-base-100/90",
      link: "https://job-filtering-dash-board.vercel.app/",
    },
    {
      title: "Portfolio",
      content:
        "This portfolio website you're currently viewing, built with React, TypeScript, and Framer Motion. It showcases my projects, skills, and experience in a visually appealing and interactive manner.",
      img: portfolioImg,
      gradient: "from-base-100/90 via-secondary/90 to-base-content/90",
      link: "#",
    },
    {
      title: "Three.js 3D Website",
      content:
        "A 3D interactive web experience built with Three.js, allowing users to explore 3D models in a web environment. (Note: The images in the published version doesn't match the original design due to hosting limitations, but the 3D functionality is fully implemented.)",
      img: threejsImg,
      gradient: "from-green-950/90 to-blue-900/90",
      link: "https://threejs-3d-taupe.vercel.app/",
    },
    {
      title: "ToDo App",
      content:
        "A simple ToDo application with real-time updates and backend integration, allowing users to create, read, update, and delete tasks. Built with HTLM, TailwindCSS, JavaScript and Django, it features a clean and intuitive user interface for efficient task management.",
      img: todoImg,
      gradient: "from-purple-900/90 to-base-100/90",
      link: "https://todolist-jx8l.onrender.com/",
    },
  ];

  return (
    <section
      id="work"
      ref={targetRef}
      className="relative h-[300vh] bg-base-300"
    >
      <div className="sticky h-screen items-center overflow-hidden w-screen top-0 flex">
        <motion.div>
          <WorkCard
            title={projects[0].title}
            content={projects[0].content}
            img={projects[0].img}
            gradient={projects[0].gradient}
            link={projects[0].link}
          />
        </motion.div>
        <motion.div style={{ x }}>
          <WorkCard
            title={projects[1].title}
            content={projects[1].content}
            img={projects[1].img}
            gradient={projects[1].gradient}
            link={projects[1].link}
          />
        </motion.div>
        <motion.div style={{ x: x2 }}>
          <WorkCard
            title={projects[2].title}
            content={projects[2].content}
            img={projects[2].img}
            gradient={projects[2].gradient}
            link={projects[2].link}
          />
        </motion.div>
        <motion.div style={{ x: x3 }}>
          <WorkCard
            title={projects[3].title}
            content={projects[3].content}
            img={projects[3].img}
            gradient={projects[3].gradient}
            link={projects[3].link}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default MyProjects;
