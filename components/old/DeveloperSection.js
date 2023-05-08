import Link from "next/link";
import React, { useState } from "react";
import Dropdown from "./Dropdown";

const buttons = [
  "Android",
  "iOS/macOS",
  "Windows",
  "Web",
  "Electron",
  "Flutter",
  "React Native",
  "Unity",
];

const DeveloperSection = () => {
  const [activeTab, setActiveTab] = useState("Android");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState(buttons[0]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleTitleClick = (title) => {
    setSelectedTitle(title);
    setIsOpen(false);
    setActiveTab(title);
  };

  const sdks = [
    <code
      className={`text-white text-xs ${
        activeTab.includes("Android") ? "block" : "hidden"
      }`}
      key="Android"
    >
      <span className="text-[#CC99CD]">import</span> io.agora.rtc.RtcEngine;
      <br />
      <br />
      mRtcEngine <span className="text-[#099DFD]">=</span> RtcEngine.
      <span className="text-[#E46430]">create</span>
      (context, appid, eventHandler);
      <br />
      mRtcEngine.<span className="text-[#E46430]">setupLocalVideo</span>
      (videoCanvas);
      <br />
      mRtcEngine.<span className="text-[#E46430]">enableVideo</span>();
      <br />
      mRtcEngine.<span className="text-[#E46430]">joinChannel</span>
      (token, channelName, info, uid);
      <br />
      mRtcEngine.
      <span className="text-[#E46430]">setupRemoteVideo</span>
      (videoCanvas);
      <br />
      mRtcEngine.<span className="text-[#E46430]">leaveChannel</span>();
    </code>,
    <code
      className={`text-white text-xs  ${
        activeTab.includes("iOS/macOS") ? "block" : "hidden"
      }`}
      key="iOS/macOS"
    >
      <span className="text-[#CC99CD]">import AgoraRtcKit</span>
      <br />
      <br />
      agoraKit <span className="text-[#099DFD]">=</span>
      <span className="text-[#CC99CD]"> AgoraRtcEngineKit</span>.
      <span className="text-[#E46430]">sharedEngine</span>(withAppId:
      <span className="text-[#CC99CD]"> AppID</span>, delegate:
      <span className="text-[#CC99CD]"> self</span>)
      <br />
      agoraKit.
      <span className="text-[#E46430]">setupLocalVideo</span>(videoCanvas)
      <br />
      agoraKit.<span className="text-[#E46430]">enableVideo</span>()
      <br />
      agoraKit.<span className="text-[#E46430]">joinChannel</span>(byToken:
      <span className="text-[#CC99CD]">Token</span>, channelId:
      &quot;demoChanne1&quot;, info:nil, uid:0)
      <br />
      agoraKit.<span className="text-[#E46430]">setupRemoteVideo</span>
      (videoCanvas)
      <br />
      agoraKit.<span className="text-[#E46430]">leaveChannel</span>(nil)
    </code>,
  ];

  return (
    <div className="my-40">
      <div>
        <div className="text-center text-white">
          <h1 className="text-3xl ">
            Embed real-time voice and video with a{" "}
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#F47A33] to-[#099DFD]">few lines of code</span>
          </h1>
          <h3 className="my-5 text-lg font-semibold">
            Cross-platform SDKs help you get to market faster.
          </h3>
        </div>
        <div>
          <div className="hidden md:block mt-10 border-b border-slate-800 py-3">
            <div className="font-bold flex justify-center gap-x-8 text-white">
              {buttons?.map((title) => {
                return (
                  <button
                    key={title}
                    onClick={() => handleTitleClick(title)}
                    className={`duration-200 ${
                      activeTab.includes(title) &&
                      "text-[#099DFD] relative before:absolute before:w-full before:h-full before:border-[#099DFD] before:border-b-2 before:-bottom-3 text-transparent bg-clip-text bg-gradient-to-r from-[#F47A33] to-[#099DFD]"
                    }`}
                  >
                    {title}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="block md:hidden">
            <Dropdown
              buttons={buttons}
              toggleDropdown={toggleDropdown}
              handleTitleClick={handleTitleClick}
              isOpen={isOpen}
              selectedTitle={selectedTitle}
            />
          </div>
        </div>
        <div>
          <div className="max-w-6/12 bg-[#2D2D2D] mx-3 mt-5 md:mt-10 p-4 rounded-xl">
            {sdks?.map((code) => {
              return code;
            })}
          </div>
          <div className="mt-5">
            <p className="text-center text-white">
              Get up and running fast with step-by-step instructions in
              <Link href="/" className="text-[#099DFD] hover:text-[#099DFD] hover:underline">
                {" "}
                Documentation
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperSection;
