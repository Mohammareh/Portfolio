import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function HoverCircle() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [clicked, setClicked] = useState(false);
  const lastMousePos = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    // Handle mousemove: update lastMousePos and circle position
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX - 11;
      const mouseY = e.clientY - 11;
      lastMousePos.current = { x: mouseX, y: mouseY };
      setPos({
        x: mouseX + window.scrollX,
        y: mouseY + window.scrollY,
      });
    };

    // Handle scroll: if we have lastMousePos, update position based on current scroll
    const handleScroll = () => {
      if (lastMousePos.current) {
        setPos({
          x: lastMousePos.current.x + window.scrollX,
          y: lastMousePos.current.y + window.scrollY,
        });
      }
    };

    if (visible) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("scroll", handleScroll, { passive: true });

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [visible]);

  return (
    <div
      className="absolute top-0 left-0 w-screen h-[200vh] bg-base-100"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onMouseDown={() => setClicked(true)}
      onMouseUp={() => setClicked(false)}
    >
      {visible && (
        <motion.div
          className={`absolute z-10 rounded-full text-primary border-2 w-6 h-6 pointer-events-none`}
          style={{
            left: pos.x,
            top: pos.y,
            transform: "translate(-40%, -50%)",
            position: "absolute",
          }}
          initial={{ scale: 1, backgroundColor: "transparent" }}
          animate={{
            scale: clicked ? 1.5 : 1,
            backgroundColor: clicked ? "var(--color-primary)" : "transparent",
          }}
        />
      )}
    </div>
  );
}
