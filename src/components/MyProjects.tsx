import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import WorkCard from "./WorkCard"; // or your card component

const MyProjects = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["50%", "-50%"]);

  return (
    <section ref={targetRef} className="relative h-[200vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden w-screen">
        <motion.div style={{ x }} className="flex space-x-40">
          <WorkCard
            title={"Jobify"}
            content={"A dashboard that fetches jobs..."}
            img={"./src/assets/Jobify.png"}
            gradient="orange-black"
          />
          <WorkCard
            title={"Portfolio"}
            content={"My portfolio site..."}
            img={"./src/assets/Jobify.png"}
            gradient="purple-black"
          />
          <WorkCard
            title={"E-commerce"}
            content={"A full e-commerce platform..."}
            img={"./src/assets/Jobify.png"}
            gradient="green-blue"
          />
          <WorkCard
            title={"Chat App"}
            content={"Real-time chat application..."}
            img={"./src/assets/Jobify.png"}
            gradient="yellow-orange"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default MyProjects;
