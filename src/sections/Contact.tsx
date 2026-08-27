import { useState } from "react";
import ThreeDimensionCard from "../components/ThreeDimensionCard";
import { useMotionValue, useMotionValueEvent } from "framer-motion";

const Contact = () => {
  const [currentCard, setCurrentCard] = useState(1);
  const [dragging, setDragging] = useState(false);
  const sites = ["GitHub", "LinkedIn", "Number"];

  const x = useMotionValue(0);

  const handleDragStart = () => {
    console.log("Hello world, Drag has been started");
    setDragging(true);
  };

  const handleDragEnd = () => {
    console.log("Hello world, Drag has been ended");
    setDragging(false);
  };

  useMotionValueEvent(x, "change", (latest) => {
    if ((latest >= 150 && dragging) || (latest <= -150 && dragging)) {
      setCurrentCard(Math.floor(Math.random() * 3));
      console.log("Working");
      setDragging(false);
    }
  });

  return (
    <section id="contact">
      <ThreeDimensionCard
        handleDragEnd={handleDragEnd}
        handleDragStart={handleDragStart}
        x={x}
        link={sites[currentCard]}
      />

      {/* <ThreeDimensionCard link={"GitHub"} />
      <ThreeDimensionCard link={"LinkedIn"} />
      <ThreeDimensionCard link={"Number"} /> */}
    </section>
  );
};

export default Contact;
