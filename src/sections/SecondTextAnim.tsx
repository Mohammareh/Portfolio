import { motion } from "framer-motion";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const SecondTextAnim = () => {
  const firstTargetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: firstTargetRef,
  });

  const text = "Here's what I've built";

  const letters = text.split(" ");
  console.log(letters);

  return (
    <section ref={firstTargetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden w-screen justify-center">
        <motion.div className="flex text-center">
          <p
            className="text-xl sm:text-6xl md:text-[5rem] lg:text-[6rem] xl:text-[7rem] text-center font-bold flex flex-wrap justify-center space-x-4 space-y-8"
            style={{}}
          >
            {letters.map((char, i) => (
              <Character
                key={i}
                char={char}
                scrollYProgress={scrollYProgress}
                i={i}
                letters={letters}
              />
            ))}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const Character = ({ char, scrollYProgress, i, letters }) => {
  const opacity: any = useTransform(
    scrollYProgress,
    [Math.abs(1 - (i + 1)) / letters.length, (i + 1) / letters.length, 1],
    ["0", "1", "1"],
  );

  const y = useTransform(
    scrollYProgress,
    [Math.abs(1 - (i + 1)) / letters.length, (i + 1) / letters.length, 1],
    [i % 2 === 0 ? "50px" : "-50px", "0px", "0px"],
  );

  // For x: use pixel values with units
  const x = useTransform(
    scrollYProgress,
    [Math.abs(1 - (i + 1)) / letters.length, (i + 1) / letters.length, 1],
    ["100px", "0px", "0px"], // Start 100px right, end at original position
  );

  return (
    <motion.span style={{ opacity, y, display: "inline-block" }}>
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
};

export default SecondTextAnim;
