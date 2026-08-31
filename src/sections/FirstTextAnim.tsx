import { motion } from "framer-motion";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const FirstTextAnim = () => {
  const firstTargetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: firstTargetRef,
  });

  const text = "Let's build something together";

  const letters = text.split("");

  return (
    <section
      ref={firstTargetRef}
      className="relative h-[200vh] pointer-events-none"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden w-screen justify-center px-4 ">
        <motion.div className="flex text-center">
          <p className="whitespace-nowrap text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center font-bold">
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

const Character = ({
  char,
  scrollYProgress,
  i,
  letters,
}: {
  char: string;
  i: number;
  scrollYProgress: any;
  letters: string[];
}) => {
  const opacity: any = useTransform(
    scrollYProgress,
    [Math.abs(1 - (i + 1)) / letters.length, (i + 1) / letters.length, 1],
    ["0", "1", "1"],
  );

  const y = useTransform(
    scrollYProgress,
    [Math.abs(1 - (i + 1)) / letters.length, (i + 1) / letters.length, 1],
    ["50px", "0px", "0px"],
  );

  return (
    <motion.span style={{ opacity, y, display: "inline-block" }}>
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
};

export default FirstTextAnim;
