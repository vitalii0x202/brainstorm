import React, { useEffect, useRef } from "react";
import CardsToken from "./CardsToken";

const Token = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = entry.target as HTMLVideoElement;
        if (entry.isIntersecting) {
          if (video.paused) {
            video.load();
            video.playbackRate = 1.5;
            video.play().catch(err => console.error("Error playing video:", err));
          }
        } else {
          video.pause();
        }
      });
    }, { threshold: 0.1, rootMargin: "100px" });

    if (videoRef.current) observer.observe(videoRef.current);
    return () => { if (videoRef.current) observer.unobserve(videoRef.current); };
  }, []);

  return (
    <section className="text-gray-100 pb-2 md:px-2 py-2 relative overflow-hidden">
      <div className="w-full flex justify-center items-start md:items-center flex-col relative overflow-hidden">
        <p className="text-md xl:text-lg text-[#ffffff8c] leading-relaxed lg:max-w-2xl xl:max-w-4xl text-start md:text-center">
          <strong>$ITLX is the rail for memory in motion.</strong> When memory is created, licensed, used,
          updated, or revoked, $ITLX settles it—with receipts. Activators (our built-in agents) protect
          personal memories in PLMs, enforce permissions, and route royalties without moving raw data.
        </p>

        <video
          ref={videoRef}
          loop
          width={900}
          height={900}
          muted
          playsInline
          preload="none"
          className="h-[30rem] object-cover md:w-full md:h-[40rem] contrast-[105%] pointer-events-none relative select-none"
        >
          <source src="/assets/assetsVideo/tokenIntellex.mp4" type="video/mp4" />
        </video>

        <div className="flex justify-center items-center gap-3 md:gap-5 flex-nowrap pl-1">
          <span className="relative flex h-3 md:h-5 w-3 md:w-5 -top-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#96ff00] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 md:h-5 w-3 md:w-5 bg-[#96ff00]"></span>
          </span>
          <h3 className="text-[#ffffffda] text-2xl md:text-3xl 2xl:text-5xl font-semibold text-start md:text-center md:my-[1.4rem] mb-2">
            Key Roles of the <span className="text-[#c1f77a]">$ITLX</span> Token
          </h3>
        </div>
      </div>

      <CardsToken />
    </section>
  );
};

export default Token;
