import { motion } from "framer-motion";

import { ArrowDownLeft } from "lucide-react";

const ThreeDimensionCard = ({
  link,
  x,
  handleDragEnd,
  handleDragStart,
}: {
  link: string;
  x: any;
  handleDragEnd: any;
  handleDragStart: any;
}) => {
  return (
    <motion.div
      className="hover-3d my-12 mx-2 cursor-pointer"
      drag="x"
      dragConstraints={{ left: 100, right: 0 }}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      whileHover={{ scale: 1 }}
      style={{ x }}
    >
      {/* content */}
      <div className="card w-96 bg-neutral text-neutral-content bg-[radial-gradient(circle_at_bottom_left,#ffffff04_35%,transparent_36%),radial-gradient(circle_at_top_right,#ffffff04_35%,transparent_36%)] bg-size-[4.95em_4.95em]">
        <div className="card-body">
          <div className="flex justify-between mb-10">
            <div className="font-bold">
              If you have a product that needs a sharper React layer, write me.
            </div>
            <div className="text-5xl opacity-10">❁</div>
          </div>
          <div className="text-lg">
            Call me or send a message at <ArrowDownLeft className="inline" />
          </div>
          <div className="text-lg mb-4 opacity-40">+966 50 081 2403</div>
          <div className="flex justify-between">
            <div>
              <div className="text-xs opacity-20">CARD HOLDER</div>
              <div>MOHAMMED AHMED A.</div>
            </div>
            <div>
              <div className="text-xs opacity-20">{link}</div>
              <div>hi</div>
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
    </motion.div>
  );
};

export default ThreeDimensionCard;
