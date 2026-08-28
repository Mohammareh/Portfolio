import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const gradients = {
  "orange-black": "from-orange-700 to-black",
  "purple-black": "from-purple-700 to-black",
  "green-blue": "from-green-700 to-blue-700",
  "yellow-orange": "from-yellow-700 to-orange-700",
};

const WorkCard = ({
  content,
  title,
  img,
  gradient,
}: {
  content: string;
  title: string;
  img: string;
  gradient: string | keyof typeof gradients;
}) => {
  const gradientClass =
    gradients[gradient as keyof typeof gradients] || gradients["orange-black"];

  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const opacity = useTransform(scrollYProgress, [0, 1], ["1", "0"]);

  return (
    <motion.div
      style={{ opacity }}
      className="w-screen h-screen justify-center items-center opacity-50 pointer-events-none z-20"
      initial={{ opacity: 0, x: 40, scale: 0.9 }}
      whileInView={{ scale: 1, opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className={`bg-linear-to-b ${gradientClass} w-full h-screen pointer-events-none z-20`}
      >
        <div className="card flex flex-col items-center justify-center">
          <div className="card-title place-self-start ml-5 mt-3 text-4xl font-extrabold text-base-content opacity-100">
            {title}
          </div>
          <div className="card-body">
            {content}
            <img className="rounded-3xl" src={img} alt="" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkCard;
