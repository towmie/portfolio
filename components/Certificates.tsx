import React from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-20 w-full" id="certificates">
      <h1 className="heading">
        My <span className="text-purple">Certificates</span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-10">
        <a
          className="cursor-pointer"
          target="_blank"
          href="https://threejs-journey.com/certificate/view/36993"
        >
          <Button
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 cursor-auto"
          >
            <div
              className="relative w-full h-full overflow-hidden lg:rounded-3xl"
              style={{ backgroundColor: "#13162D" }}
            >
              <img src="/three.png" alt="" className="cursor-pointer" />
            </div>
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Experience;
