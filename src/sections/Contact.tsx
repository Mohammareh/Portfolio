import { useState } from "react";
import ThreeDimensionCard from "../components/ThreeDimensionCard";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Contact = () => {
  const [cardIndex, setCardIndex] = useState(1);

  const [x, setX] = useState("54%");
  const [x2, setX2] = useState("53%");
  const [x3, setX3] = useState("50%");
  const [x4, setX4] = useState("20%");

  const [scale, setScale] = useState(0.6);
  const [scale2, setScale2] = useState(1);
  const [scale3, setScale3] = useState(0.6);
  const [scale4, setScale4] = useState(0.6);

  const [opacity, setOpacity] = useState(0.4);
  const [opacity2, setOpacity2] = useState(1);
  const [opacity3, setOpacity3] = useState(0.4);
  const [opacity4, setOpacity4] = useState(0.4);

  const handleSwitch = (target: number | string): void => {
    let nextIndex = cardIndex;

    if (typeof target === "string") {
      // Arrow button logic
      if (target === "left") {
        nextIndex = cardIndex === 0 ? 3 : cardIndex - 1;
      } else if (target === "right") {
        nextIndex = cardIndex === 3 ? 0 : cardIndex + 1;
      }
    } else {
      // Card click logic
      nextIndex = target;
    }

    setCardIndex(nextIndex);

    if (nextIndex === 0) {
      setX("160%");
      setX2("160%");
      setX3("125%");
      setX4("100%");
      setScale(1);
      setScale2(0.6);
      setScale3(0.6);
      setScale4(0.6);
      setOpacity(1);
      setOpacity2(0.4);
      setOpacity3(0.4);
      setOpacity4(0.4);
    } else if (nextIndex === 1) {
      setX("54%");
      setX2("53%");
      setX3("50%");
      setX4("20%");
      setScale(0.6);
      setScale2(1);
      setScale3(0.6);
      setScale4(0.6);
      setOpacity(0.4);
      setOpacity2(1);
      setOpacity3(0.4);
      setOpacity4(0.4);
    } else if (nextIndex === 2) {
      setX("-20%");
      setX2("-50%");
      setX3("-50%");
      setX4("-54%");
      setScale(0.6);
      setScale2(0.6);
      setScale3(1);
      setScale4(0.6);
      setOpacity(0.4);
      setOpacity2(0.4);
      setOpacity3(1);
      setOpacity4(0.4);
    } else if (nextIndex === 3) {
      setX("-100%");
      setX2("-125%");
      setX3("-150%");
      setX4("-160%");
      setScale(0.6);
      setScale2(0.6);
      setScale3(0.6);
      setScale4(1);
      setOpacity(0.4);
      setOpacity2(0.4);
      setOpacity3(0.4);
      setOpacity4(1);
    }
  };

  return (
    <section id="contact" className="flex flex-col w-full">
      <div className="flex w-full items-center">
        <button
          className="btn btn-circle z-10 w-[10%]"
          onClick={() => handleSwitch("left")}
        >
          <ArrowLeft />
        </button>
        <div className="flex w-[80%] justify-center items-center">
          <ThreeDimensionCard
            social={"phone"}
            cardIndex={0}
            x={x}
            scale={scale}
            opacity={opacity}
            handleSwitch={handleSwitch}
            selected={cardIndex === 0 ? true : false}
          />
          <ThreeDimensionCard
            social={"github"}
            cardIndex={1}
            x={x2}
            scale={scale2}
            opacity={opacity2}
            handleSwitch={handleSwitch}
            selected={cardIndex === 1 ? true : false}
          />
          <ThreeDimensionCard
            social={"linkedin"}
            cardIndex={2}
            x={x3}
            scale={scale3}
            opacity={opacity3}
            handleSwitch={handleSwitch}
            selected={cardIndex === 2 ? true : false}
          />
          <ThreeDimensionCard
            social={"email"}
            cardIndex={3}
            x={x4}
            scale={scale4}
            opacity={opacity4}
            handleSwitch={handleSwitch}
            selected={cardIndex === 3 ? true : false}
          />
        </div>
        <button
          className="btn btn-circle z-10 w-[10%]"
          onClick={() => handleSwitch("right")}
        >
          <ArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Contact;
