import React from "react";

import { techStack } from "@/data";
import { Button } from "./ui/MovingBorders";

const TechStacks = () => {
  return (
    <div
      className="py-20 w-full flex items-center justify-center"
      id="techstacks"
    >
      <h1 className="heading mt-10">
        My <span className="text-purple font-thin">Tech Stacks</span>
      </h1>
      <p></p>

      <div className="w-full mt-12 flex items-center justify-center">
        {techStack.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",

              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="lg:ms-5 flex lg:flex-row flex-col lg:items-center justify-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <p className="text-start text-white-100 mt-3 font-semibold">
                {card.desc}
              </p>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TechStacks;
