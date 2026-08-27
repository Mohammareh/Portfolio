import { motion } from "framer-motion";
import { Plus } from "lucide-react";

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
  gradient: keyof typeof gradients;
}) => {
  const gradientClass = gradients[gradient] || gradients["orange-black"];

  return (
    <motion.div
      className="w-full min-w-64 rounded-[37px] justify-center items-center relative border-2 opacity-50 pointer-events-none z-20"
      initial={{ opacity: 0, x: 40, scale: 0.9 }}
      whileInView={{ scale: 1, opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0, scale: 0.5 }}
    >
      <div className="border-4 border-base-300 rounded-[2.2rem] relative">
        <div
          className={`rounded-4xl bg-linear-to-b ${gradientClass} w-full relative pointer-events-none z-20`}
        >
          <div className="w-full h-12 rounded-tl-4xl rounded-tr-4xl bg-white/20 backdrop-blur-lg border border-white/20 flex items-center px-4 justify-between">
            <div className="space-x-4">
              <div className="w-4 h-4 rounded-full text-red-600 aura aura-glow aura-lg">
                <div className="w-full h-full rounded-full bg-red-400" />
              </div>
              <div className="w-4 h-4 rounded-full text-yellow-500 aura aura-glow aura-lg">
                <div className="w-full h-full rounded-full bg-yellow-300" />
              </div>
              <div className="w-4 h-4 rounded-full text-green-600 aura aura-glow aura-lg">
                <div className="w-full h-full rounded-full bg-green-400" />
              </div>
            </div>
            <div>
              <Plus className="" />
            </div>
          </div>
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
      </div>
    </motion.div>
  );
};

export default WorkCard;
