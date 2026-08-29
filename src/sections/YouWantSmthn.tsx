import { motion } from "framer-motion";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const YouWantSmthn = () => {
  const firstTargetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: firstTargetRef,
  });

  const text = "You want something?";

  const letters = text.split("");
  console.log(letters);

  return (
    <section ref={firstTargetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden w-screen justify-center">
        <motion.div className="flex md:space-x-8 text-center">
          <p
            className="text-xl sm:text-6xl md:text-[5rem] lg:text-[6rem] xl:text-[7rem] 2xl:text-[9rem] text-center font-bold"
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
    [Math.abs(1 - (i + 1)) / letters.length, (i + 1) / letters.length],
    ["0", "1"],
  );

  // For y: use pixel values with units
  const y = useTransform(
    scrollYProgress,
    [Math.abs(1 - (i + 1)) / letters.length, (i + 1) / letters.length],
    ["50px", "0px"], // Start 50px down, end at original position
  );

  // For x: use pixel values with units
  const x = useTransform(
    scrollYProgress,
    [Math.abs(1 - (i + 1)) / letters.length, (i + 1) / letters.length],
    ["100px", "0px"], // Start 100px right, end at original position
  );

  return (
    <motion.span style={{ opacity, y, display: "inline-block" }}>
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
};

export default YouWantSmthn;
