import React from "react";
import Link from "next/link";
import Image from "next/image";
import voiceImg from "../../public/voice.svg";
import videoImg from "../../public/video.svg";
import streamingImg from "../../public/interactive-live-streaming.svg";
import signalImg from "../../public/signaling.svg";
import chatImg from "../../public/chat-sdk-2.svg";
import whiteboardImg from "../../public/interactive-whiteboard.svg";

const services = [
  { img: voiceImg, title: "Voice Calling", url: "" },
  { img: videoImg, title: "Video Calling", url: "" },
  { img: streamingImg, title: "Interactive Live Streaming", url: "" },
  {
    img: signalImg,
    title: "Signaling (previously Real-Time Messaging)",
    url: "",
  },
  { img: chatImg, title: "Chat", url: "" },
  { img: whiteboardImg, title: "Interactive Whiteboard", url: "" },
];

const Services = () => {
  return (
    <div>
      <div className="text-center text-white">
        <div>
          <div className="mt-[60px] mb-[50px]">
            <h2 className="text-5xl leading-tight">
              Everything you need to build a complete{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F47A33] to-[#099DFD] font-bold">
                real-time experience
              </span>
            </h2>
          </div>
          <div>
            <h2 className="text-3xl mb-[20px]">
              Build your vision with{" "}
              <span className="font-bold text-[#099DFD]">
                fully-customizable <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F47A33] to-[#099DFD]">SDKs</span>
              </span>
            </h2>
            <h3 className="mb-4">
              Flexible APIs give you control over every aspect of your
              experience.
            </h3>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 mx-auto justify-items-center md:grid-cols-2 gap-y-5 text-left">
            {services?.map(({ img, title, url }) => {
              return (
                // <Link
                //   key={title}
                //   href={url}
                //   className="w-full md:w-[360px] lg:w-[400px] flex gap-x-2 items-center bg-white hover:bg-[#FAFAFA] duration-200 p-8 rounded-lg shadow-md hover:shadow-none"
                // >
                //   <div>
                //     <Image src={img} width={50} height={50} alt="appsTech" />
                //   </div>
                //   <div>
                //     <h3>{title}</h3>
                //   </div>
                // </Link>
                <Link
                  key={title}
                  href={url}
                  className="w-full md:w-[380px] lg:w-[400px] flex items-center gap-x-2 p-4 border bg-slate-800  border-slate-700 rounded-lg hover:border-[#099DFD] hover:shadow-lg hover:shadow-blue-600/20 hover:border-blue-300/30 transition-all duration-300 hover:scale-105"
                >
                  <div>
                    <Image src={img} width={50} height={50} alt="appsTech" />
                  </div>
                  <div>
                    <h3>{title}</h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
