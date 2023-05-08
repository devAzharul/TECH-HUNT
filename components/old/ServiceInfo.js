import React from "react";

const ServiceInfo = () => {
  return (
    <div>
      <div className="ServiceInfoBackground w-full min-h-[530px] py-5 md:py-0 flex flex-col justify-center items-center text-white">
        <div className="max-w-[1280px] mx-auto grid  grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-10 px-5">
          <div className="leading-loose">
            <h3 className="font-semibold text-xl leading-relaxed">The only network built for real-time</h3> Your user experience deserves
            the only network engineered specifically to power real-time voice
            and video.
          </div>
          <div className="border border-[#F47A33] p-4 rounded-xl">
            <h3 className="font-semibold text-lg">The highest quality</h3> Deliver the best quality real-time voice and
            video to your users with ultra-low latency and intelligent routing
            based on device and network conditions.
          </div>
          <div className="border border-[#099DFD] p-4 rounded-xl">
            <h3 className="font-semibold text-lg">Global coverage</h3> Reach anyone, anywhere with the largest global
            real-time network, providing interactive experiences to users in
            over 200 countries and regions.
          </div>
          <div className="border border-[#F47A33] p-4 rounded-xl">
            <h3 className="font-semibold text-lg">Hyper scalability</h3> Withstand sudden spikes in traffic gracefully and
            scale from one to millions of concurrent users as your app and
            business grow.
          </div>
          <div className="border border-[#099DFD] p-4 rounded-xl">
            <h3 className="font-semibold text-lg">Mission-critical reliability</h3> Build your experience to last with
            99.99% uptime, 24/7 support, and zero system-wide downtime in
            company history.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceInfo;
