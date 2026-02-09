"use client";

import useMobile from "@/hooks/UseMobile";
import { useEffect, useRef } from "react";

export default function WhatActivators() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.playbackRate = 0.75;

      const handleTimeUpdate = () => {
        const remainingTime = video.duration - video.currentTime;
        if (remainingTime <= 0.442) {
          video.currentTime = 0;
        }
      };

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (video.paused) {
                video.load();
                video.play().catch(err => console.error('Error playing video:', err));
              }
            } else {
              video.pause();
            }
          });
        },
        { threshold: 0.1, rootMargin: "100px" }
      );

      observer.observe(video);
      video.addEventListener("timeupdate", handleTimeUpdate);

      return () => {
        observer.unobserve(video);
        video.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, []);

  const isMobile = useMobile();

  return (
    <div className=" md:mx-auto md:px-4 pt-8 w-full xl:h-[40rem]">
      <div className="w-full h-full gap-[2rem] md:gap-6 lg:px-0 mb-[5rem] flex justify-center items-center flex-col lg:flex-row relative ">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="top-0 xl:-top-16 relative w-full h-full min-h-[17rem] flex flex-col gap-4 justify-start md:justify-center items-start z-[10]">
            <h3 className="titleColor text-2xl lg:text-[2.2vw] 3xl:text-[2.2vw] font-bold text-start mb-3 relative !leading-[130%]">
              The Role of Activators in Intelligence Management
            </h3>
            <p className="text-[.9rem] 3xl:text-[1rem] 3xl:w-[90%] text-[#ffffff8c] leading-relaxed max-w-6xl text-start">
              Activators play a crucial role in aggregating, customizing, and
              delivering intelligence assets, ensuring flexibility, liquidity,
              and adaptability in their application. Guided by token holders,
              Activators are designed to evolve, refine, and respond dynamically
              to business needs.
            </p>
          </div>
        </div>

        {!isMobile && (
          <div className="w-full lg:min-w-[48vw] 2xl:min-w-[50rem] mx-auto container relative ">
            <video
              ref={videoRef}
              loop
              width={1000}
              height={800}
              muted
              playsInline
              preload="none"
              className=" h-[100%] 2md:h-[50vw] lg:h-[36vw] xl:h-[27vw] 3xl:h-[25vw] relative xl:-top-10 object-cover lg:object-contain 2xl:object-cover contrast-[105%] pointer-events-none select-none"
            >
              <source src="/assets/assetsVideo/switch.mp4" type="video/mp4" />
            </video>
          </div>
        )}
      </div>
    </div>
  );
}
