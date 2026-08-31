import { motion } from "framer-motion";

const AboutMeCard = ({
  content,
  title,
  gradient,
  style,
}: {
  content: string;
  title: string;
  gradient: string;
  style?: any;
}) => {
  return (
    <motion.div style={style} className="relative h-screen w-screen">
      <motion.div className="flex h-screen w-screen items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-10">
        <div
          className={`flex h-[78vh] w-[92vw] items-center justify-center rounded-4xl backdrop-blur-sm border border-white/10 bg-linear-to-br ${gradient} px-6 py-8 shadow-[0_30px_80px_rgba(0,0,0,0.45)] ring-1 ring-white/10 sm:px-10 lg:px-16`}
        >
          <div className="text-center">
            <span className="mb-6 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium uppercase tracking-[0.24em] text-orange-100/90 backdrop-blur-sm">
              {title}
            </span>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-tight font-semibold tracking-tight text-white/95">
              {content}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutMeCard;
