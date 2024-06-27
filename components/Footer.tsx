import {
  FaGithub,
  FaLinkedin,
  FaLocationArrow,
  FaXTwitter,
} from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

export default function Footer() {
  return (
    <footer className="w-full pt-20 pb-10 overflow-hidden" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Let&apos;s Create{" "}
          <span className="text-purple">Something Amazing Together</span>
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
            <a
              target="_blank"
              href={item.link}
              key={item.id}
              className="mt-4 md:mt-0 w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              {item.network === "github" && <FaGithub />}
              {item.network === "x" && <FaXTwitter />}
              {item.network === "linkedin" && <FaLinkedin />}
              {item.network === "telegram" && <FaTelegramPlane />}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
