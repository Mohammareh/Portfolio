import { motion } from "framer-motion";

import { GitBranch, Link2, Phone } from "lucide-react";

const ThreeDimensionCard = ({
  x,
  scale,
  social,
  opacity,
  selected,
  cardIndex,
  handleSwitch,
}: {
  x: string;
  scale: number;
  opacity: number;
  social: string;
  selected: boolean;
  cardIndex: number;
  handleSwitch: (index: number | string) => void;
}) => {
  const card =
    social === "github"
      ? {
          bg: "bg-base-200",
          icon: <GitBranch size={32} />,
          title: "GitHub",
          description:
            "My GitHub account including this project source code and all of my other projects",
          website: "GitHub",
          topInfo: "I love GitHub",
          bottomInfo: "I hate Git",
          link: "https://github.com/Mohammareh",
        }
      : social === "phone"
        ? {
            bg: "bg-green-950",
            icon: <Phone size={32} />,
            title: "Phone Number",
            description:
              "Call me or send a message via WhatsApp at +966500812403 ",
            website: "WhatsApp",
            topInfo: "Best contact method btw",
            bottomInfo: "I meant WhatsApp chatting",
            link: "https://wa.me/966500812403",
          }
        : {
            bg: "bg-blue-950",
            icon: <Link2 size={32} />,
            title: "LinkedIn",
            description:
              "My LinkedIn account. Nothing very special but it exists ;)",
            website: "LinkedIn",
            topInfo: "Mainly for job hunting",
            bottomInfo: "My feed is all google",
            link: "https://www.linkedin.com/in/mohammed-alrassas-1b707341b",
          };

  return (
    <motion.a
      href={selected ? card.link : undefined}
      target={selected ? "_blank" : undefined}
      className={`hover-3d my-12 mx-2 
      ${selected && "cursor-pointer"}
      `}
      animate={{ x, scale, opacity }}
      onClick={(e) => {
        if (!selected) {
          e.preventDefault();
          handleSwitch(cardIndex);
        }
      }}
    >
      {/* content */}
      <div
        className={`card scale-70 w-96  sm:scale-100 ${card.bg}  text-primary bg-[radial-gradient(circle_at_bottom_left,#ffffff04_35%,transparent_36%),radial-gradient(circle_at_top_right,#ffffff04_35%,transparent_36%)] bg-size-[4.95em_4.95em]`}
      >
        <div className="card-body">
          <div className="flex justify-between mb-5">
            <div className="font-bold">{card.title}</div>
            <div className="text-5xl opacity-10">{card.icon}</div>
          </div>
          <div className="text-lg">{card.description}</div>
          <div className="text-lg h-9 mb-4 opacity-40">{card.link}</div>
          <div className="flex justify-between">
            <div>
              <div className="text-xs opacity-20">Website</div>
              <div>{card.website}</div>
            </div>
            <div>
              <div className="text-xs opacity-20">{card.topInfo}</div>
              <div>{card.bottomInfo}</div>
            </div>
          </div>
        </div>
      </div>

      {/* 8 empty divs needed for the 3D effect */}
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </motion.a>
  );
};

export default ThreeDimensionCard;
