import React from "react";
import Image from "next/image";
import img from "../../public/hero.png";

const Hero = () => {
  return (
    <div className="w-full min-h-[682px] flex flex-col justify-center heroBackground border-b border-slate-800">
      <div className="flex justify-center">
        <div className="basis-11/12 md:basis-10/12 xl:basis-9/12 flex flex-col py-10 md:py-0 md:flex-row items-center justify-between text-transparent bg-clip-text bg-gradient-to-r from-[#F47A33] to-[#099DFD]">
          <div>
            <div className="text-6xl font-extrabold leading-none mb-5">
              <h2>Build</h2>
              <h2>community</h2>
              <h2>into your app</h2>
            </div>
            <div className="max-w-[700px]">
              <p className="text-2xl text-white">
                Live, interactive voice and video powered by the only global
                network dedicated to real-time engagement.
              </p>
            </div>
          </div>
          <div>
            <div>
              <Image src={img} width={700} height={500} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
