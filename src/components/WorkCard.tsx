import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
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

  return (
    <motion.div className="pointer-events-none z-20 flex h-screen w-screen items-center justify-center overflow-hidden">
      <div
        className={`flex h-screen w-full items-center justify-center bg-linear-to-b ${gradientClass} px-4 py-8 sm:px-8 lg:px-16`}
      >
        <div className="card flex w-full max-w-7xl items-center justify-center rounded-4xl border border-white/10 bg-black/10 shadow-2xl backdrop-blur-sm">
          <div className="card-body flex w-full flex-col items-center justify-between gap-8 px-4 py-8 sm:flex-row sm:px-8 lg:px-12">
            <div className="flex flex-col items-center space-y-5 text-center sm:w-[30%] sm:items-start sm:text-left">
              <div className="card-title ml-0 mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {title}
              </div>
              <p className="max-w-md text-sm leading-relaxed text-white/80 sm:text-base">
                {content}
              </p>
            </div>
            <div className="flex w-full justify-center sm:w-[60%]">
              <img
                className="h-[40vh] w-full max-w-[60vw] rounded-[1.75rem] border border-white/10 object-cover sm:h-[55vh]"
                src={img}
                alt={`${title} screenshot`}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkCard;
