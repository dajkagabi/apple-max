import React from "react";
import video from "../../assets/hero.mp4";

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center text-[#0F172A]">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={video}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 z-10"></div>

      <div className="relative z-20 flex flex-col items-start text-left p-4 md:p-8 max-w-2xl mx-auto md:ml-24">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          AirPods Max – Hang, új szintre emelve.
        </h1>
        <p className="text-lg md:text-xl font-light mb-8 max-w-xl">
          A tökéletes egyensúly az innováció, a kényelem és a prémium minőség
          között.
        </p>
        <a href="#discover" className="inline-block">
          <button className="bg-gray-800 text-white px-8 py-3 rounded-full hover:bg-black transition-colors duration-300 flex items-center space-x-2">
            Fedezd fel
           
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
