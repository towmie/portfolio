import { Spotlight } from "./ui/Spotlight";

function Hero() {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          fill="white"
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
        />
        <Spotlight
          fill="purple"
          className="top-10 left-full h-[80vh] w-[50vh]"
        />
        <Spotlight fill="blue" className="top-28 left-80 h-[80vh] w-[50vh]" />
      </div>
    </div>
  );
}

export default Hero;
