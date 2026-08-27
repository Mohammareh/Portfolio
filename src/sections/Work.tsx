import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const Work = () => {
  return (
    <section
      id="about-me"
      className="px-[19%] relative flex flex-col items-center space-y-70 mt-40 w-full"
    >
      <motion.div
        className="rounded-tl-[36px] w-full rounded-tr-[36px] justify-center items-center h-100 sm:h-80 md:h-60 border-t-4 border-x-4 opacity-50 pointer-events-none z-20 border-fade-down"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{
          scale: 1,
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="rounded-tl-4xl rounded-tr-4xl bg-linear-to-b from-primary/50 to-base-100 w-full h-100 pointer-events-none z-20">
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
            <h2 className="card-title place-self-start ml-5 mt-3 text-xl sm:text-3xl md:text-4xl font-extrabold text-base-content opacity-100">
              Who am I and what have I done?
            </h2>
            <div className="card-body opacity-100 text-lg font-semibold">
              {/* Down there you will find my proudest projects i've worked on */}
              Keep scrolling to see who I am and get the full picture 👀
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Work;
