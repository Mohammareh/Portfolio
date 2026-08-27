import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const OhReallyHuh = () => {
  const firstTargetRef = useRef<HTMLDivElement>(null);
  const secondTargetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: firstScrollYProgress } = useScroll({
    target: firstTargetRef,
  });

  const { scrollYProgress: secondScrollYProgress } = useScroll({
    target: secondTargetRef,
  });

  const opacity = useTransform(
    firstScrollYProgress,
    [0, 0.3, 0.9, 1],
    [0, 1, 1, 0],
  );

  const secondOpacity = useTransform(
    secondScrollYProgress,
    [0, 0.3, 0.9, 1],
    [0, 1, 1, 0],
  );

  return (
    <>
      <section ref={firstTargetRef} className="relative h-[150vh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden w-screen justify-center">
          <motion.div className="flex gap-8 text-center">
            <motion.p
              className="text-xl sm:text-6xl md:text-[5rem] lg:text-[6rem] xl:text-[7rem] 2xl:text-[9rem] text-center font-bold"
              style={{ opacity }}
            >
              You want something?
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section ref={secondTargetRef} className="relative h-[150vh]">
        <div className=" sticky top-0 flex h-screen items-center overflow-hidden w-screen justify-center">
          <motion.div className="flex gap-8 text-center">
            <motion.p
              className="text-xl sm:text-6xl md:text-[5rem] lg:text-[6rem] xl:text-[7rem] 2xl:text-[9rem] text-center font-bold"
              style={{ opacity: secondOpacity }}
            >
              Check these shi*ty projects then
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default OhReallyHuh;
