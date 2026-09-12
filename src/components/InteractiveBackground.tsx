import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function InteractiveBackground() {
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);
  const isHovering = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, {
    stiffness: 50,
    damping: 20,
    mass: 0.4,
  });
  const smoothMouseY = useSpring(mouseY, {
    stiffness: 50,
    damping: 20,
    mass: 0.4,
  });
  const smoothIsHovering = useSpring(isHovering, {
    stiffness: 80,
    damping: 15,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      isHovering.set(1);
    };

    const handleMouseLeave = () => isHovering.set(0);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY, isHovering]);

  const glowOpacity = useTransform(smoothIsHovering, [0, 1], [0, 0.15]);
  const glowSize = useTransform(smoothIsHovering, [0, 1], [100, 200]);

  const secondaryOpacity = useTransform(glowOpacity, (o) => o * 0.5);
  const secondarySize = useTransform(glowSize, (s) => s * 1.25);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-20 overflow-hidden"
      aria-hidden="true"
    >
      <motion.div
        className="absolute rounded-full bg-primary/30 blur-[60px] pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          left: smoothMouseX,
          top: smoothMouseY,
          width: glowSize,
          height: glowSize,
          opacity: glowOpacity,
        }}
      />

      <motion.div
        className="absolute rounded-full bg-primary/15 blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          left: smoothMouseX,
          top: smoothMouseY,
          width: secondarySize,
          height: secondarySize,
          opacity: secondaryOpacity,
        }}
      />
    </div>
  );
}