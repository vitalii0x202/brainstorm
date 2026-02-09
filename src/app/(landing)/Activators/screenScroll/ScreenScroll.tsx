"use client";
import React, { useEffect, useRef } from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export default function ScreenScroll() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
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

      return () => {
        observer.unobserve(video);
      };
    }
  }, []);

  return (
    <div className=" flex-col overflow-hidden hidden md:flex relative z-[10] pt-[4rem] xl:pt-0 px-[3rem] xl:px-0">
      <ContainerScroll
        titleComponent={
          <>
            <h3 className="titleColor text-[1.8rem] lg:text-[2.6rem] xl:text-6xl max-w-[930px] capitalize  font-semibold text-start md:text-center leading-tight mb-[5rem] xl:mb-[7rem]">
              <span className="text-shadowClass flex items-center gap-4 flex-nowrap justify-center text-[1.4rem] xl:text-[2rem] !leading-[200%] lg:!leading-tight mb-4">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#96ff00] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#96ff00]"></span>
                </span>
                Activators
              </span>
              <span>Sample Activator Job Descriptions</span>
            </h3>
          </>
        }
      >
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          preload="none"
          className="w-full h-full lg:object-cover xl:object-contain object-left-top rounded-2xl"
        >
          <source src="/assets/assetsVideo/portal.mp4" type="video/mp4" />
        </video>
      </ContainerScroll>
    </div>
  );
}
