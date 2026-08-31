import { useState } from "react";
import ThreeDimensionCard from "../components/ThreeDimensionCard";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Contact = () => {
  const [cardIndex, setCardIndex] = useState(1);

  const [x, setX] = useState("0%");
  const [x2, setX2] = useState("0%");
  const [x3, setX3] = useState("0%");

  const [scale, setScale] = useState(0.6);
  const [scale2, setScale2] = useState(1);
  const [scale3, setScale3] = useState(0.6);

  const [opacity, setOpacity] = useState(0.4);
  const [opacity2, setOpacity2] = useState(1);
  const [opacity3, setOpacity3] = useState(0.4);

  const handleSwitch = (target: number | string): void => {
    let nextIndex = cardIndex;

    if (typeof target === "string") {
      // Arrow button logic
      if (target === "left") {
        nextIndex = cardIndex === 0 ? 2 : cardIndex - 1;
      } else if (target === "right") {
        nextIndex = cardIndex === 2 ? 0 : cardIndex + 1;
      }
    } else {
      // Card click logic
      nextIndex = target;
    }

    setCardIndex(nextIndex);

    if (nextIndex === 0) {
      setX("104%");
      setX2("100%");
      setX3("100%");
      setScale(1);
      setScale2(0.6);
      setScale3(0.6);
      setOpacity(1);
      setOpacity2(0.4);
      setOpacity3(0.4);
    } else if (nextIndex === 1) {
      setX("0%");
      setX2("0%");
      setX3("0%");
      setScale(0.6);
      setScale2(1);
      setScale3(0.6);
      setOpacity(0.4);
      setOpacity2(1);
      setOpacity3(0.4);
    } else if (nextIndex === 2) {
      setX("-100%");
      setX2("-100%");
      setX3("-104%");
      setScale(0.6);
      setScale2(0.6);
      setScale3(1);
      setOpacity(0.4);
      setOpacity2(0.4);
      setOpacity3(1);
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
        </div>
        <button
          className="btn btn-circle z-10 w-[10%]"
          onClick={() => handleSwitch("right")}
        >
          <ArrowRight />
        </button>
      </div>
      <p className="z-10 text-2xl text-center mb-10">
        Or write me an email at xdmohammad83@gmail.com
      </p>
    </section>
  );
};

export default Contact;
