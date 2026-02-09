"use client";

import React, { useEffect, useRef, useMemo } from "react";

interface VideoItem {
  title: string;
  description: string;
  header: string;
}

const CardsToken: React.FC = () => {
  const items: VideoItem[] = useMemo(
    () => [
      {
        title: "Activators Protect Personal Memories (PLMs)",
        description:
          "Built-in agents enforce permissions, guard PLM access, and route royalties—so personal memory stays private while still being useful.",
        header: "/assets/assetsVideo/ai.mp4",
      },
      {
        title: "Create & Prove Ownership",
        description:
          "Register Memory Assets with provenance. $ITLX records origin and consent so ownership is clear and portable.",
        header: "/assets/assetsVideo/sec.mp4",
      },
      {
        title: "License & Use (Micro-Royalties)",
        description:
          "Grant time-/scope-limited access; each approved call settles in $ITLX and pays the owner—answers and proofs, not raw data.",
        header: "/assets/assetsVideo/cloud.mp4",
      },
      {
        title: "Update & Revoke",
        description:
          "Fund federated learning rounds in $ITLX to improve models without sharing data. Revoke access with tombstones that the network enforces.",
        header: "/assets/assetsVideo/token.mp4",
      },
    ],
    []
  );

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = entry.target as HTMLVideoElement;
        if (entry.isIntersecting) {
          if (video.paused) {
            video.load();
            video.play().catch(err => console.error("Error playing video:", err));
          }
        } else {
          video.pause();
        }
      });
    }, { threshold: 0.1, rootMargin: "100px" });

    videoRefs.current.forEach((video) => { if (video) observer.observe(video); });
    return () => { videoRefs.current.forEach((video) => { if (video) observer.unobserve(video); }); };
  }, []);

  return (
    <div className="w-full lg:max-w-4xl 2xl:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 mt-10 md:mt-20 gap-8">
      {items.map((item, index) => (
        <div
          key={index}
          className="row-span-1 rounded-xl hover:shadow-xl items-center transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-[#000000dc] dark:border-[#161616ec] bg-white border border-transparent justify-between flex flex-col space-y-4 pb-6 w-full"
        >
          <video
            ref={(el) => { videoRefs.current[index] = el; }}
            loop
            muted
            width={450}
            height={450}
            playsInline
            preload="none"
            className="h-[20rem] object-contain contrast-[108%] brightness-[120%] relative pointer-events-none select-none"
          >
            <source src={item.header} type="video/mp4" />
          </video>
          <div className="transition duration-200 text-start min-h-[8rem]">
            <div className="text-lg 2xl:text-xl text-[#c1f77a] font-semibold mb-2 mt-2">{item.title}</div>
            <div className="font-normal text-[.9rem] 2xl:text-[1rem] text-[#ffffff8c]">{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(CardsToken);
