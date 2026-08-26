import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import WorkCard from "../components/WorkCard";

const Work = () => {
  return (
    <section className="flex flex-col items-center h-[300vh] space-y-70 mt-40 w-full">
      <motion.div
        className="rounded-tl-[36px] w-full rounded-tr-[36px] justify-center items-center h-100 border-t-4 border-x-4 opacity-50 pointer-events-none z-20 border-fade-down"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ scale: 1, opacity: 1, y: 0 }}
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
            <h2 className="card-title place-self-start ml-5 mt-3 text-4xl font-extrabold text-base-content opacity-100">
              My Work
            </h2>
            <div className="card-body opacity-100 text-2xl font-semibold">
              Down there you will find my proudest projects i've worked on
            </div>
          </div>
        </div>
      </motion.div>
      <WorkCard title={"Work1"} content={"Hello world1"} />
      <WorkCard title={"Work2"} content={"Hello world2"} />
      <a href="#" className="hover-3d my-12 mx-2 cursor-pointer">
        {/* content */}
        <div className="card w-96 bg-black text-white bg-[radial-gradient(circle_at_bottom_left,#ffffff04_35%,transparent_36%),radial-gradient(circle_at_top_right,#ffffff04_35%,transparent_36%)] bg-size-[4.95em_4.95em]">
          <div className="card-body">
            <div className="flex justify-between mb-10">
              <div className="font-bold">MOHAMMED NUMBER</div>
              <div className="text-5xl opacity-10">❁</div>
            </div>
            <div className="text-lg mb-4 opacity-40">0210 8820 1150 0222</div>
            <div className="flex justify-between">
              <div>
                <div className="text-xs opacity-20">CARD HOLDER</div>
                <div>VICTOR VON D.</div>
              </div>
              <div>
                <div className="text-xs opacity-20">EXPIRES</div>
                <div>29/08</div>
              </div>
            </div>
          </div>
        </div>

        {/* 8 empty divs needed for the 3D effect */}
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </a>
    </section>
  );
};

export default Work;
