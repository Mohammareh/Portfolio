import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Box = ({ text }: { text: string }) => {
  return (
    <div className="w-40 p-3 h-40 rounded-4xl border-2 flex items-center text-center bg-base-200">
      <p className="mx-auto">{text}</p>
    </div>
  );
};

const HorizontalScroll = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["50%", "-100%"]);
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#ff0000", "#00ff00"],
  );

  return (
    <section ref={targetRef} className="relative h-[400vh] pointer-events-none">
      <div className="sticky top-0 border mt-10 flex h-screen items-center overflow-hidden w-screen">
        <motion.div
          style={{ x, backgroundColor }}
          className="flex gap-8 items-center h-full"
        >
          <div className="flex items-center justify-center w-80 md:w-96 shrink-0">
            <div className="relative aura rounded-4xl aura-rainbow aura-lg">
              <div className="absolute -inset-4 bg-linear-to-r from-primary to-secondary rounded-full blur-3xl opacity-30" />
              <div className="relative bg-base-200 rounded-3xl p-8 text-center border-2 border-primary/20">
                <h2 className="text-5xl font-extrabold mb-2">About</h2>
                <h2 className="text-5xl font-extrabold text-primary">Me</h2>
              </div>
            </div>
          </div>

          <Box
            text="Frontend developer obsessed with motion, interaction, and 
the space where engineering meets animation."
          />
          <Box text="I'm still a joniur dev..." />
          <Box text="I started 4 years ago and felt in love..." />
          <Box text="I didn't took it seruosly..." />
          <Box text="As soon as I learnt about animations..." />
          <Box text="I can see my self coding for the rest of my life..." />
          <Box text="I promise to keep improving..." />
          <Box text="One day, These boxes will be REAL projects..." />
          <Box text=" hopefully..." />
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScroll;
