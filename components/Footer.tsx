import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { socialMedia } from "@/data";
import { div } from "three/examples/jsm/nodes/Nodes.js";

export default function Footer() {
  return (
    <footer className="w-full pt-20 pb-10 overflow-hidden" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span>digital
          experience to the next level?
        </h1>
        <p className="text-center text-white-200 md:mt-10 my-5">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals
        </p>
        <a href="mailto:andre00toz@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-small font-light md:font-normal">
          Copyright © 2024. Andrei Ziuzin
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((item) => (
            <div
              key={item.id}
              className="mt-4 md:mt-0 w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={item.img} alt="profile" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
